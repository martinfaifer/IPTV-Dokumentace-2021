<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\UserLog;
use GuzzleHttp\Psr7\Request;

class LogController extends Controller
{

    public static function store($component, $payload, $errorType)
    {
        Log::create(
            [
                'component' => $component,
                'payload' => $payload,
                'errorType' => $errorType,
            ]
        );
    }

    public static function create_new_log(string $email, $multicastId = null, $h264Id = null, $h265Id = null, $deviceId = null, string $original, string $new): void
    {
        UserLog::create([
            'email' => $email,
            'multicastId' => $multicastId,
            'h264Id' => $h264Id,
            'h265Id' => $h265Id,
            'deviceId' => $deviceId,
            'original' => $original,
            'new' => $new
        ]);
    }

    public function show_multicast_history(string $channelId): array
    {
        if (UserLog::where('multicastId', $channelId)->first()) {
            return UserLog::where('multicastId', $channelId)->get()->toArray();
        }

        return [];
    }

    public function show_h264_history(Request $request)
    {
        // 
    }

    public function show_h265_history(Request $request)
    {
        // 
    }

    public function show_device_history(Request $request)
    {
        // 
    }

    public static function delete_history_record_by_item(int $itemId, string $type): void
    {
        // 
    }
}
