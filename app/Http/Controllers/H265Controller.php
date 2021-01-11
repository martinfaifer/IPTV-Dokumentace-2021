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
}
