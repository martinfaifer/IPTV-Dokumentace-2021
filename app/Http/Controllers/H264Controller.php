<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\H264;
use App\Models\M3u8;
use App\Models\UnicastChunkStoreId;
use App\Models\UnicastKvalitaChannelOutput;
use Illuminate\Http\Request;

class H264Controller extends Controller
{

    /**
     * fn pro overení zda existuje kanál
     *
     * @param Request $request
     * @return string
     */
    public static function check_if_exist(Request $request): string
    {
        if (!H264::where('channelId', $request->channelId)->first()) {
            return "notexist";
        }

        return "exist";
    }

    public static function return_transcoder_information(Request $request): array
    {

        if (!H264::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return DeviceController::return_transcoder(
            H264::where('channelId', $request->channelId)->first()->deviceId
        );
    }

    /**
     * odebrání kanálu
     *
     * @param string $channelId
     * @return array
     */
    public static function delete(string $channelId): array
    {
        if ($h264 = H264::where('channelId', $channelId)->first()) {
            ParedTagController::delete_tags('h264Id', $h264->id);
            $h264->delete();

            UnicastChunkStoreIdController::delete($channelId);

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

    /**
     * vytvoření h264 kvality 
     *
     * @param Request $request
     * @return array
     */
    public function create(Request $request): array
    {
        // overení existence 
        if (H264::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Kanál má již H264 výstup"
                )
            ];
        }

        if (UnicastChunkStoreId::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Kanál má již uložen chunk store id"
                )
            ];
        }

        UnicastChunkStoreId::create([
            'channelId' => $request->channelId,
            'chunkStoreId' => $request->chunkStoreId
        ]);

        H264::create(
            [
                'channelId' => $request->channelId,
                'deviceId' => Device::where('name', $request->transcoder)->first()->id
            ]
        );

        $h264Id = H264::where('channelId', $request->channelId)->first()->id;

        if (M3u8::where('h264id', $h264Id)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Kanál má již uloženy M3U8"
                )
            ];
        }

        M3u8::create(
            [
                'h264id' => $h264Id,
                'kdekoliv' => $request->hlsKdekoliv,
                'local' => $request->hlsLocal,
                "mobile" => $request->hlsMobile
            ]
        );

        // 1 = 1080 , 2 = 720 , 3 = 576
        if (
            is_null($request->output1080) || empty($request->output1080) ||
            is_null($request->output720) || empty($request->output720) ||
            is_null($request->output576) || empty($request->output576)
        ) {
        }

        if (!is_null($request->output1080) || !empty($request->output1080)) {
            UnicastKvalitaChannelOutput::create(
                [
                    'kvalitaId' => "1",
                    'h264id' => $h264Id,
                    'output' => $request->output1080
                ]
            );
        }

        if (!is_null($request->output720) || !empty($request->output720)) {
            UnicastKvalitaChannelOutput::create(
                [
                    'kvalitaId' => "2",
                    'h264id' => $h264Id,
                    'output' => $request->output720
                ]
            );
        }

        if (!is_null($request->output576) || !empty($request->output576)) {
            UnicastKvalitaChannelOutput::create(
                [
                    'kvalitaId' => "3",
                    'h264Id' => $h264Id,
                    'output' => $request->output576
                ]
            );


            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Výstup vytvořen"
                ),
                'channelId' => $request->channelId
            ];
        }
    }
}
