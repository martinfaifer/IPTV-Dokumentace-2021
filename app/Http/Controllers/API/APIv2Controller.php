<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\ChannelController;
use App\Http\Controllers\Controller;
use App\Models\Channel;
use App\Models\ChannelToDohled;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\Multicast;
use Illuminate\Http\Request;

use App\Traits\NotificationTrait;

class APIv2Controller extends Controller
{
    use NotificationTrait;

    public function show(Request $request)
    {

        if (isset($request->fromDohled)) {
            return $this->show_from_dohled($request);
        }

        // do something
    }


    protected function show_from_dohled(Request $request)
    {
        if (!isset($request->dohledId)) {
            return $this->frontend_notification("error", "Chybí ID!");
        }

        if (!$channelFromDohled = ChannelToDohled::where('dohledId', $request->dohledId)->first()) {
            return $this->frontend_notification("error", "Neplatné ID!");
        }

        switch ($channelFromDohled) {
            case !is_null($channelFromDohled->channelId) || !empty($channelFromDohled->channelId):

                return [
                    'device' => Device::find(Multicast::where('channelId', $channelFromDohled->channelId)->first()->deviceId),
                    'logo' => env("APP_URL") . "/" . Channel::find($channelFromDohled->channelId)->logo
                ];
                break;

            case !is_null($channelFromDohled->H264Id) || !empty($channelFromDohled->H264Id):

                $h264 = H264::find($channelFromDohled->H264Id);
                return [
                    'device' => Device::find($h264->deviceId),
                    'logo' => env("APP_URL") . "/" . Channel::find($h264->channelId)->logo
                ];
                break;

            case !is_null($channelFromDohled->H265Id) || !empty($channelFromDohled->H265Id):

                $h265 = H265::find($channelFromDohled->H265Id);
                return [
                    'device' => Device::find($h265->deviceId),
                    'logo' => env("APP_URL") . "/" . Channel::find($h265->channelId)->logo
                ];
                break;

            default:
                return $this->frontend_notification("error", "Neplatné ID!");
                break;
        }
    }
}
