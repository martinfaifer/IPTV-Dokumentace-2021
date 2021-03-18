<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;
use App\Models\Device;
use App\Models\Multicast;
use App\Models\Satelit;
use App\Models\SatelitCard;
use App\Models\Tag;
use App\Models\Wiki;

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


    /**
     * vyhledávání dle specifických filtrů
     *
     * @param string $filter
     * @param string $item
     * @return array
     */
    public function filter(string $filter, string $item): array
    {

        // $filter ==> Tag, Satelit, Device
        // $item ==> hledaný výraz ( musí být našeptávač dle $filter )

        $item = base64_decode($item);
        switch ($filter) {
            case 'tag':
                // vyhledání kanálů, zařízení s daným tagem
                return TagController::show_by_tag($item);
                break;

            case 'satelit':
                // vyhledání zařízení s hledaným satelitem
                return SatelitController::show_interfaces_where_is_this_satelit($item);
                break;

            case 'zařízení':
                // vyhledání kanálů na daném zařízení
                return DeviceController::show_channels_on_device($item);
                break;

            default:
                return [];
                break;
        }
    }


    public function filterData(Request $request): array
    {

        switch ($request->filter) {
            case 'tag':
                // vyhledání kanálů, zařízení s daným tagem
                foreach (Tag::all() as $tag) {
                    $output[] = $tag->tagName;
                }
                return $output;
                break;

            case 'satelit':
                // vyhledání zařízení s hledaným satelitem
                foreach (Satelit::all() as $satelit) {
                    $output[] = $satelit->satelit;
                }

                return $output;
                break;

            case 'zařízení':
                // vyhledání kanálů na daném zařízení
                foreach (Device::all() as $device) {
                    $output[] = $device->name;
                }

                return $output;
                break;

            default:
                return [];
                break;
        }
    }
}
