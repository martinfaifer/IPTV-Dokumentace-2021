<?php

namespace App\Http\Controllers;

use App\Models\ChannelsToTranscoder;
use App\Models\ChannelToDohled;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\UnicastKvalitaChannelOutput;
use Illuminate\Http\Request;

class H265Controller extends Controller
{
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
            ParedTagController::delete_tags('h264Id', $h265->id);
            $h265->delete();

            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Odebráno"
                )
            ];
        } else {

            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepodařilo se odebrat"
                )
            ];
        }
    }


    public static function create(Request $request): array
    {
        // $request->channelId , addToTranscoder , transcoder, output1080 , output720

        if (is_null($request->transcoder) || empty($request->transcoder)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Není vyplněno zařízení"
                )
            ];
        }


        if (H265::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Kanál má již H265 výstup"
                )
            ];
        }

        // zalození
        $h265 = H265::create(
            [
                'channelId' => $request->channelId,
                'deviceId' => Device::where('name', $request->transcoder)->first()->id
            ]
        );



        // zallzení kvalit

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


        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Výstup vytvořen"
            ),
            'channelId' => $request->channelId
        ];
    }


    public function update_transcoder(Request $request): array
    {
        try {
            H265::where('channelId', $request->channelId)->update(
                [
                    'deviceId' => Device::where('name', $request->transcoder)->first()->id
                ]
            );


            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Změněno"
                )
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepodařilo se změnit"
                )
            ];
        }
    }

    public static function return_dohled_data(Request $request): array
    {
        // vyhledání H264
        if (!$h265 = H265::where('channelId', $request->channelId)->first()) {
            return [];
        }

        // overení existence id v ChannelsToDohled
        if (!$channelOnDohled = ChannelToDohled::where('H265Id', $h265->id)->first()) {
            return [];
        }

        return ApiController::return_information_about_channel(
            $channelOnDohled->dohledId
        );
    }


    public static function manage_stream(Request $request): array
    {
        if (!$h265 = H265::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje stream"
                )
            ];
        }

        // overení existence id v ChannelsToDohled
        if (!$channelOnTranscoder = ChannelsToTranscoder::where('H265Id', $h265->id)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje stream s vazbou na transcoder"
                )
            ];
        }


        return [
            ApiController::send_action_to_transcoder(
                $channelOnTranscoder->transcoderId,
                $request->transcoderAction
            )
        ];
    }
}
