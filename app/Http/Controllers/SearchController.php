<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Device;
use App\Models\Multicast;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class SearchController extends Controller
{

    static array $notFount = [
        array(
            'result' => "Nic nebylo nalezeno ... ",
            'url' => "channel"
        )
    ];

    public static function search(): array
    {

        foreach (Channel::get(['id', 'nazev']) as $channel) {
            $sumArr[] = array(
                'result' => $channel->nazev,
                'url' => "channel/{$channel->id}"
            );
        }

        foreach (Multicast::get(['channelId', 'stb_ip']) as $stbIp) {
            $sumArr[] = array(
                'result' => $stbIp->stb_ip,
                'url' => "channel/{$stbIp->channelId}"
            );
        }

        foreach (Device::get(['id', 'name']) as $device) {
            $sumArr[] = array(
                'result' => $device->name,
                'url' => "device/{$device->id}"
            );
        }

        return [
            'entries' => $sumArr
        ];
    }
}
