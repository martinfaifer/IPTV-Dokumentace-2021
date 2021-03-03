<?php

namespace App\Http\Controllers;

use App\Models\ChannelsToTranscoder;
use App\Models\ChannelToDohled;
use App\Models\Device;
use App\Models\H264;
use App\Models\M3u8;
use App\Models\UnicastChunkStoreId;
use App\Models\UnicastKvalitaChannelOutput;
use App\Models\UnicastOutputForDevice;
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

    public static function try_to_get_stream_status(Request $request): array
    {
        if (!H264::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        if ($streamId = ChannelsToTranscoder::where(
            'H264Id',
            H264::where('channelId', $request->channelId)->first()->id
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
     * odebrání z webu
     *
     * @param Request $request
     * @return array
     */
    public function delete_from_web(Request $request): array
    {
        return $this->delete($request->channelId);
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

            // delete m3u8
            UnicastOutputForDevice::where('h264Id', $h264->id)->first()->delete();

            // unicast
            foreach (UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->get() as $kvalita) {
                UnicastKvalitaChannelOutput::where('id', $kvalita->id)->first()->delete();
            }

            ParedTagController::delete_tags('h264Id', $h264->id);
            $h264->delete();


            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Odebráno"
                ),
                'channelId' => $channelId
            ];
        } else {

            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepodařilo se odebrat"
                ),
                'channelId' => $channelId
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

        if (is_null($request->transcoder) || empty($request->transcoder)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Není vyplněno zařízení"
                )
            ];
        }

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
            // nic nedelat
        } else {
            UnicastChunkStoreId::create([
                'channelId' => $request->channelId,
                'chunkStoreId' => $request->chunkStoreId
            ]);
        }

        H264::create(
            [
                'channelId' => $request->channelId,
                'deviceId' => Device::where('name', $request->transcoder)->first()->id
            ]
        );

        $h264Id = H264::where('channelId', $request->channelId)->first()->id;

        UnicastOutputForDeviceController::generate($request);

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
                    'h264Id' => $h264Id,
                    'output' => $request->output1080
                ]
            );
        }

        if (!is_null($request->output720) || !empty($request->output720)) {
            UnicastKvalitaChannelOutput::create(
                [
                    'kvalitaId' => "2",
                    'h264Id' => $h264Id,
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
            H264::where('channelId', $request->channelId)->update(
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

    /**
     * editace h264
     *
     * @param Request $request
     * @return array
     */
    public static function edit(Request $request): array
    {
        try {
            UnicastKvalitaChannelOutputController::h264_update($request);

            UnicastOutputForDeviceController::generate($request);

            // chunk store Id 
            UnicastChunkStoreIdController::edit($request);

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
                    'msg' => "Error 500"
                )
            ];
        }
    }


    public static function return_dohled_data(Request $request): array
    {
        // vyhledání H264
        if (!H264::where('channelId', $request->channelId)->first()) {
            return [];
        }

        // overení existence id v ChannelsToDohled
        if (!ChannelToDohled::where('H264Id', H264::where('channelId', $request->channelId)->first()->id)->first()) {
            return [];
        }

        return ApiController::return_information_about_channel(
            ChannelToDohled::where('H264Id', H264::where('channelId', $request->channelId)->first()->id)->first()->dohledId
        );
    }
}
