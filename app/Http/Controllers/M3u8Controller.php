<?php

namespace App\Http\Controllers;

use App\Models\M3u8;
use App\Models\H264;
use App\Models\H265;
use App\Models\Streamer;
use App\Models\StreamerAndPortBound;
use App\Models\StreamPort;
use Illuminate\Http\Request;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class M3u8Controller extends Controller
{
    use NotificationTrait;

    public static function update_m3u8_h264(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'kdekoliv' => 'required',
            'local' => 'required',
            'mobile' => 'required'
        ]);
        if ($validation->fails()) {
            return self::frontend_notification('error', 'error', 'Musí být vše vyplněno!');
        }


        $unicastId = H264::where('channelId', $request->channelId)->first()->id;
        M3u8::where('h264id', $unicastId)->update(
            [
                'kdekoliv' => $request->kdekoliv,
                'local' => $request->local,
                'mobile' => $request->mobile
            ]
        );

        return self::frontend_notification('success', 'success', 'Upraveno!');
    }

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
