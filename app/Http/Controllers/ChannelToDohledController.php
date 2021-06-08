<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\ChannelToDohled;
use App\Models\H264;
use App\Models\H265;
use App\Models\Multicast;
use App\Models\UnicastKvalitaChannelOutput;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Traits\NotificationTrait;

class ChannelToDohledController extends Controller
{
    use NotificationTrait;

    public function createOrDelete(Request $request): array
    {
        if (!isset($request->type)) {
            return NotificationController::notify();
        }

        if (!isset($request->channelId)) {
            return NotificationController::notify();
        }

        if ($request->type === 'h264') {
            $id = H264::where('channelId', $request->channelId)->first()->id;
            $column = "H264Id";
        } else {
            $id = H265::where('channelId', $request->channelId)->first()->id;
            $column = "H265Id";
        }

        foreach ($request->data as $data) {

            if (!Str::contains($data['output'], ":1234")) {
                $url = $data['output'] . ":1234";
            } else {
                $url = $data['output'];
            }

            if ($data['in_dohled'] === true) {
                if (!ChannelToDohled::where('channel_uri', $url)->first()) {
                    try {
                        $this->create($request, $data, $id, $column, $url);
                    } catch (\Throwable $th) {
                        return $this->frontend_notification();
                    }
                }
            }

            if ($data['in_dohled'] === false) {
                if ($channelOnDohled = ChannelToDohled::where('channel_uri', $url)->first()) {
                    try {
                        self::delete_from_dohled($channelOnDohled);
                        $channelOnDohled->delete();
                    } catch (\Throwable $th) {
                        return $this->frontend_notification();
                    }
                }
            }
            unset($url);
        }

        return NotificationController::notify("success", "success", "Předáno ke zpracování");
    }

    protected function create(Request $request, array $data, string $channelId, string $column, $url)
    {
        $channel = Channel::find($request->channelId);
        $name = $channel->nazev . "_" . $request->type . "_" . $data['format'];
        ApiController::create_channel_to_dohled($name, $url, true, true, $channelId, $column);
    }

    public static function check_if_exist($channel_uri): bool
    {
        if (Str::contains($channel_uri, ':1234')) {
            $uri = $channel_uri;
        } else {
            $uri = $channel_uri . ":1234";
        }
        if (!ChannelToDohled::where('channel_uri',  $uri)->first()) {
            return false;
        }

        return true;
    }

    public static function try_to_find_channel_in_dohled(): void
    {
        // vyhledání multicastu, unicastu na dohledu a připárování id

        // multicasty
        foreach (Multicast::all() as $multicast) {
            echo $multicast->stb_ip . ":1234" . PHP_EOL;
            if (!is_null($apiResult = ApiController::try_to_find_stream_in_iptvdohled($multicast->stb_ip . ":1234"))) {
                if (!$channel_result = ChannelToDohled::where('channelId', $multicast->id)->orWhere('dohledId', $apiResult)->first()) {
                    ChannelToDohled::create([
                        'channelId' => $multicast->id,
                        'dohledId' => $apiResult,
                        'channel_uri' => $multicast->stb_ip
                    ]);
                }

                if (is_null($channel_result->channel_uri)) {
                    $channel_result->update([
                        'channel_uri' => $multicast->stb_ip
                    ]);
                }
            }
        }

        // h264
        foreach (H264::all() as $h264) {
            if ($h264Data = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->first()) {
                echo $h264Data->output . PHP_EOL;
                if (!is_null($apiResult = ApiController::try_to_find_stream_in_iptvdohled($h264Data->output))) {
                    if (!$h264_channnel_result = ChannelToDohled::where('H264Id', $h264->id)->orWhere('dohledId', $apiResult)->first()) {
                        ChannelToDohled::create([
                            'H264Id' => $h264->id,
                            'dohledId' => $apiResult,
                            'channel_uri' => $h264Data->output
                        ]);
                    }

                    if (is_null($h264_channnel_result->channel_uri)) {
                        $h264_channnel_result->update([
                            'channel_uri' => $h264Data->output
                        ]);
                    }
                }
            }
        }

        // h265
        foreach (H265::all() as $h265) {
            if ($h265Data = UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->first()) {
                echo $h265Data->output . PHP_EOL;
                if (!is_null($apiResult = ApiController::try_to_find_stream_in_iptvdohled($h265Data->output))) {
                    if (!$h265_channnel_result = ChannelToDohled::where('H265Id', $h265->id)->orWhere('dohledId', $apiResult)->first()) {
                        ChannelToDohled::create([
                            'H265Id' => $h265->id,
                            'dohledId' => $apiResult,
                            'channel_uri' => $h265Data->output
                        ]);
                    }

                    if (is_null($h265_channnel_result->channel_uri)) {
                        $h265_channnel_result->update([
                            'channel_uri' => $h265Data->output
                        ]);
                    }
                }
            }
        }
    }

    public static function delete($channelId = null, $h264Id = null, $h265Id = null): void
    {
        if (!is_null($channelId)) {
            self::delete_from_table("channelId", $channelId);
        }

        if (!is_null($channelId)) {
            self::delete_from_table("H264Id", $h264Id);
        }

        if (!is_null($channelId)) {
            self::delete_from_table("H265Id", $h265Id);
        }
    }

    protected static function delete_from_table($column, $id): void
    {
        if ($channel = ChannelToDohled::where($column, $id)->first()) {
            self::delete_from_dohled($channel);
            $channel->delete();
        }
    }

    protected static function delete_from_dohled($channel): void
    {
        ApiController::deletechannel_from_dohled($channel->dohledId);
    }
}
