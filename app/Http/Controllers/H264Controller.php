<?php

namespace App\Http\Controllers;

use App\Models\H264;
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
}
