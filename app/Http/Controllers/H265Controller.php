<?php

namespace App\Http\Controllers;

use App\Models\H265;
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
}
