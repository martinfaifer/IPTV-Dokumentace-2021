<?php

namespace App\Http\Controllers;

use App\Models\M3u8;
use App\Models\H264;
use App\Models\H265;
use Illuminate\Http\Request;

class M3u8Controller extends Controller
{
    public static function return_m38u_by_id(Request $request): array
    {
        if ($request->type === "h264") {

            // vyhledání h264ID
            $unicastId = H264::where('channelId', $request->channelId)->first()->id;


            // $request->channelId
            if (!M3u8::where('h264id', $unicastId)->first()) {
                return [
                    'status' => "empty"
                ];
            }

            return [
                'status' => "success",
                'data' => M3u8::where('h264id', $unicastId)->first()
            ];
        }

        if ($request->type === "h265") {

            // vyhledání h265ID
            $unicastId = H265::where('channelId', $request->channelId)->first()->id;

            // $request->channelId
            if (!M3u8::where('h265id', $unicastId)->first()) {
                return [
                    'status' => "empty"
                ];
            }

            return [
                'status' => "success",
                'data' => M3u8::where('h265id', $unicastId)->first()
            ];
        }
    }
}
