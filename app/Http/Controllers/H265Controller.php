<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\ChannelsToTranscoder;
use App\Models\ChannelToDohled;
use App\Models\Device;
use App\Models\H265;
use App\Models\UnicastKvalitaChannelOutput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class H265Controller extends Controller
{
    use NotificationTrait;
    /**
     * fn pro overení zda existuje kanál
     *
     * @param Request $request->channelId
     * @return string
     */
    public static function check_if_exist(Request $request): string
    {
        if (!H265::where('channelId', $request->channelId)->first()) {
            return "notexist";
        }

        return "exist";
    }


    /**
     * fn pro navrácení názvu transcodéru
     *
     * @param Request $request->channelId
     * @return array
     */
    public static function return_transcoder_information(Request $request): array
    {

        if (!H265::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return DeviceController::return_transcoder(
            H265::where('channelId', $request->channelId)->first()->deviceId
        );
    }


    public static function try_to_get_stream_status(Request $request): array
    {
        if (!H265::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "empty"
            ];
        }
        if ($streamId = ChannelsToTranscoder::where(
            'H265Id',
            H265::where('channelId', $request->channelId)->first()->id
        )->first()) {
            return [
                'status' => "success",
                'streamStatus' => ApiController::get_streamStatus_from_transcoder($streamId->transcoderId)
            ];
        } else {
            return [
                'status' => "error",
                'streamStatus' => null
            ];
        }
    }


    /**
     * odebrání kanálu 
     *
     * @param string $channelId
     * @return array
     */
    public static function delete(string $channelId): array
    {
        if ($h265 = H265::where('channelId', $channelId)->first()) {
            // ParedTagController::delete_tags('h264Id', $h265->id);
            $h265->delete();


            BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "odebral H265 u ", Channel::find($channelId)->nazev);
            return self::frontend_notification("success", "success", "Odebráno!");
        } else {

            return self::frontend_notification("error", "error", "Nepodařilo se odebrat!");
        }
    }


    public static function create(Request $request): array
    {

        $validation = Validator::make($request->all(), [
            'transcoder' => 'required'
        ]);
        if ($validation->fails()) {
            return self::frontend_notification("error", "warning", "Není vyplněno zařízení!");
        }

        if (H265::where('channelId', $request->channelId)->first()) {
            return self::frontend_notification("error", "error", "Kanál má již H265 výstup");
        }

        // zalození
        $h265 = H265::create(
            [
                'channelId' => $request->channelId,
                'deviceId' => Device::where('name', $request->transcoder)->first()->id
            ]
        );

        if (
            !is_null($request->output1080) || !empty($request->output1080) ||
            !is_null($request->output720) || !empty($request->output720)
        ) {

            // zalození + validace

            if (!is_null($request->output1080) || !empty($request->output1080)) {
                UnicastKvalitaChannelOutput::create(
                    [
                        'kvalitaId' => "4",
                        'h265Id' => $h265->id,
                        'output' => $request->output1080
                    ]
                );
            }

            if (!is_null($request->output720) || !empty($request->output720)) {
                UnicastKvalitaChannelOutput::create(
                    [
                        'kvalitaId' => "5",
                        'h265Id' => $h265->id,
                        'output' => $request->output720
                    ]
                );
            }
        }

        BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "vytvořil H265 u ", Channel::find($request->channelId)->nazev);

        return self::frontend_notification("success", "success", "Výstup vytvořen!", $request->channelId);
    }


    public function update_transcoder(Request $request): array
    {
        try {
            H265::where('channelId', $request->channelId)->update(
                [
                    'deviceId' => Device::where('name', $request->transcoder)->first()->id
                ]
            );

            BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "změnil transcodér u ", Channel::find($request->channelId)->nazev);

            return $this->frontend_notification("success", "success", "Upraveno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification("error", "error", "Nepodařilo se změnit!");
        }
    }

    public function edit(Request $request): array
    {

        if (is_null($request->p1080) && is_null($request->p720)) {
            return $this->frontend_notification("error", "error", "Musí být vyplněn alespoň jeden output!");
        }

        if (!$h265 = H265::where('channelId', $request->channelId)->first()) {
            return $this->frontend_notification("error", "error", "Nebyl nalezen kanál");
        }
        // 4  = 1080 , 5 = 720

        if ($p1080 = UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->where('kvalitaId', "4")->first()) {
            if (is_null($request->p1080)) {
                $p1080->delete();
            } else {
                $p1080->update([
                    'output' => $request->p1080
                ]);
            }
        } else {
            UnicastKvalitaChannelOutput::create([
                'h265Id' => $h265->id,
                'kvalitaId' => "4",
                'output' => $request->p1080
            ]);
        }

        if ($p720 = UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->where('kvalitaId', "5")->first()) {
            if (is_null($request->p720)) {
                $p720->delete();
            } else {
                $p720->update([
                    'output' => $request->p720
                ]);
            }
        } else {
            UnicastKvalitaChannelOutput::create([
                'h265Id' => $h265->id,
                'kvalitaId' => "5",
                'output' => $request->p720
            ]);
        }

        UnicastOutputForDeviceController::generate_h265($request);

        BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "upravil H265 u ", Channel::find($request->channelId)->nazev);
        return $this->frontend_notification("success", "success", "Upraveno!");
    }

    public static function return_dohled_data(Request $request): array
    {
        // vyhledání H264
        if (!$channel = H265::where('channelId', $request->channelId)->first()) {
            return [];
        }

        // overení existence id v ChannelsToDohled
        if (!ChannelToDohled::where('H265Id', $channel->id)->first()) {
            return [];
        }


        foreach (ChannelToDohled::where('H265Id', $channel->id)->get() as $channelOnDohled) {
            $output[] = ApiController::return_information_about_channel($channelOnDohled->dohledId);
        }

        return [
            'status' => "success",
            'dohledData' => $output
        ];
    }


    public static function manage_stream(Request $request): array
    {
        if (!$h265 = H265::where('channelId', $request->channelId)->first()) {
            return self::frontend_notification("error", "error", "Neexistuje stream!");
        }

        // overení existence id v ChannelsToDohled
        if (!$channelOnTranscoder = ChannelsToTranscoder::where('H265Id', $h265->id)->first()) {
            return self::frontend_notification("error", "error", "Neexistuje stream s vazbou na transcoder!");
        }


        return [
            ApiController::send_action_to_transcoder(
                $channelOnTranscoder->transcoderId,
                $request->transcoderAction
            )
        ];
    }


    public function delete_from_web(Request $request): array
    {
        return $this->delete($request->channelId);
    }
}
