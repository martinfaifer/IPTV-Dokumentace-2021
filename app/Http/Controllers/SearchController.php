<?php

namespace App\Http\Controllers;

use App\Models\BlankomInterface;
use App\Models\Channel;
use App\Models\Device;
use App\Models\Multicast;
use App\Models\Satelit;
use App\Models\SatelitCard;
use App\Models\Wiki;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class SearchController extends Controller
{
    public static function search(): array
    {

        foreach (Channel::get(['id', 'nazev', 'logo']) as $channel) {
            $sumArr[] = array(
                'result' => $channel->nazev,
                'img' => $channel->logo,
                'description' => "Kanál",
                'url' => "channel/{$channel->id}"
            );
        }

        foreach (Multicast::get(['channelId', 'stb_ip']) as $stbIp) {
            $sumArr[] = array(
                'result' => $stbIp->stb_ip,
                'img' => false,
                'description' => "STB IP",
                'url' => "channel/{$stbIp->channelId}"
            );
        }

        foreach (Device::get(['id', 'name']) as $device) {
            $sumArr[] = array(
                'result' => $device->name,
                'img' => false,
                'description' => "Zařízení",
                'url' => "device/{$device->id}"
            );
        }

        foreach (SatelitCard::get(['id', 'card_number']) as $card) {
            $sumArr[] = array(
                'result' => $card->card_number,
                'img' => false,
                'description' => "Číslo karty",
                'url' => "card/{$card->id}"
            );
        }

        foreach (Wiki::where('main_kategorie', "!=", null)->get() as $wiki) {
            $sumArr[] = array(
                'result' => $wiki->main_kategorie,
                'img' => false,
                'description' => "Wiki",
                'url' => "wiki/{$wiki->id}"
            );
        }

        return [
            'entries' => $sumArr
        ];
    }
}
