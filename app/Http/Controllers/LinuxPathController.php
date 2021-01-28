<?php

namespace App\Http\Controllers;

use App\Models\LinuxPath;
use Illuminate\Http\Request;

class LinuxPathController extends Controller
{
    public static function create(string $channelId, string $path, string $deviceId): void
    {
        if (!LinuxPath::where('channelId', $channelId)->first()) {
            LinuxPath::create([
                'channelId' => $channelId,
                'path' => $path,
                'deviceId' => $deviceId
            ]);
        } else {
            self::update($channelId, $path, $deviceId);
        }
    }

    public static function read(Request $request): array
    {
        return [];
    }

    public static function update(string $channelId, string $path, string $deviceId): void
    {
        // some code
        if ($linuxPath = LinuxPath::where('channelId', $channelId)->first()) {
            $linuxPath->update(
                [
                    'path' => $path,
                    'deviceId' => $deviceId
                ]
            );
        }
    }

    public static function delete(string $channelId): void
    {
        if ($linuxPath = LinuxPath::where('channelId', $channelId)->first()) {
            $linuxPath->delete();
        }
    }
}
