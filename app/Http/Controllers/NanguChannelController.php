<?php

namespace App\Http\Controllers;

use App\Models\NanguChannel;
use Illuminate\Http\Request;
use SoapClient;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class NanguChannelController extends Controller
{
    use NotificationTrait;

    public static function index(): mixed
    {
        // 
    }

    public function show_channel_code(Request $request): mixed
    {
        return NanguChannel::where('channel_id', $request->channelId)->first()?->nangu_channel_code;
    }

    public function show(Request $request): array
    {
        return $this->get_channel_detail($this->show_channel_code($request));
    }

    public function show_sources(Request $request): array
    {
        return $this->get_channel_sources($this->show_channel_code($request));
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return array
     */
    public function update(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'channel_code' => 'required'
        ]);
        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Channel code nesmí být prázdné");
        }

        if ($code = NanguChannel::where('nangu_channel_code', $request->channel_code)->first()) {
            if ($code->channel_id != $request->channelId) {
                return $this->frontend_notification("error", "error", "Tento popis už existuje");
            }
        }

        if (!$channel = NanguChannel::where('channel_id', $request->channelId)->first()) {
            // neexistuje musí se vytvořit nové
            self::create($request->channelId, $request->channel_code);
            return $this->frontend_notification("success", "success", "Upraveno!");
        }

        $channel->update([
            'nangu_channel_code' => $request->channel_code
        ]);
        return $this->frontend_notification("success", "success", "Upraveno!");
    }

    public static function create($channel_id, $channel_code): void
    {
        NanguChannel::create([
            'channel_id' => $channel_id,
            'nangu_channel_code' => $channel_code
        ]);
    }

    public static function delete($channel_id): void
    {
        NanguChannel::where('channel_id', $channel_id)->first()->delete();
    }

    protected function get_channel_detail($channel_code): array
    {
        try {
            $soap = new SoapClient('http://app01.cho01.iptv.grapesc.cz:9080/adminws/iptv/IptvEndpoint?wsdl');

            $params = array('getChannelDetail' => array('channelKey' => $channel_code, 'ispCode' => "1"));
            return $this->parse_soap($params, $soap, 'getChannelDetail');
        } catch (\Throwable $th) {
            return [];
        }
    }

    protected function get_channel_sources($channel_code): array
    {
        try {
            $soap = new SoapClient('http://app01.cho01.iptv.grapesc.cz:9080/adminws/iptv/IptvEndpoint?wsdl');

            $params = array('getChannelSources' => array('channelKey' => $channel_code, 'ispCode' => "4"));
            return $this->parse_soap($params, $soap, 'getChannelSources');
        } catch (\Throwable $th) {
            return [];
        }
    }

    protected function parse_soap($params, $soap, $soap_call): array
    {
        $soap_data = $soap->__soapCall($soap_call, $params);
        $array = json_decode(json_encode($soap_data), true);
        return $array;
    }
}
