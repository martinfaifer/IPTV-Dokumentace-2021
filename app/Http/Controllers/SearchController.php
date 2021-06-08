<?php

namespace App\Http\Controllers;

use App\Models\BlankomInterface;
use Illuminate\Http\Request;
use App\Models\Channel;
use App\Models\Device;
use App\Models\FteInterface;
use App\Models\Multicast;
use App\Models\Satelit;
use App\Models\SatelitCard;
use App\Models\Tag;
use App\Models\Topics;
use App\Models\Wiki;

class SearchController extends Controller
{

    public $result = [];

    /**
     * vyhledávání dle specifických filtrů
     *
     * @param string $filter
     * @param string $item
     * @return array
     */
    public function filter(string $filter, string $item): array
    {
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


    public function realtime_search(Request $request): array
    {
        if (empty($request->search)) {
            return $this->result;
        }

        if (is_null($request->search)) {
            return $this->result;
        }

        // vyhledávání kanálů dle názvu
        $result_channels = Channel::where('nazev', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_channels)) {
            foreach ($result_channels as $result_channel) {
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $result_channel['nazev'],
                    'description' => "kanál",
                    'logo' => $result_channel['logo'],
                    'url' => "/channel/{$result_channel['id']}/multicast"
                ];
            }
        }

        // vyhledávání kanálu dle ip multicastové a nebo stb
        $result_channel_ips = Multicast::where('stb_ip', 'like', "%" . $request->search . "%")->orWhere('multicast_ip', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_channel_ips)) {
            foreach ($result_channel_ips as $result_channel_ip) {
                $channel = Channel::where('id', $result_channel_ip['channelId'])->first();
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $channel->nazev,
                    'description' => "kanál",
                    'logo' => $channel->logo,
                    'url' => "/channel/{$result_channel_ip['channelId']}/multicast"
                ];
                unset($channel);
            }
        }

        // vyhledávání zařízení dle názvu nebo ip
        $result_devices = Device::where('name', 'like', "%" . $request->search . "%")->orWhere('ip', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_devices)) {
            foreach ($result_devices as $result_device) {
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $result_device['name'],
                    'description' => "zařízení",
                    'logo' => null,
                    'url' => "/device/{$result_device['id']}"
                ];
            }
        }

        // vyhledávání článků dle kontextu
        $result_topics = Topics::where('text', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_topics)) {
            foreach ($result_topics as $result_topic) {
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $result_topic['topic_title'],
                    'description' => "wiki",
                    'logo' => null,
                    'url' => "/wiki/{$result_topic['id']}"
                ];
            }
        }

        // vyhledávání satelitních karet dle card number
        $result_cards = SatelitCard::where('card_number', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_cards)) {
            foreach ($result_cards as $result_card) {
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $result_card['card_number'],
                    'description' => "satelitní karta",
                    'logo' => null,
                    'url' => "/card/{$result_card['id']}"
                ];
            }
        }

        // Blok pro vyhledávání dle satelitů a výpis zařízení s vazbou na nich
        $result_blankom_satelits = BlankomInterface::where('rf1_sat', 'like', "%" . $request->search . "%")->orWhere('rf2_sat', 'like', "%" . $request->search . "%")->orWhere('rf3_sat', 'like', "%" . $request->search . "%")->orWhere('rf3_sat', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_blankom_satelits)) {
            foreach ($result_blankom_satelits as $result_blankom_satelit) {
                $device = Device::find($result_blankom_satelit['deviceId']);
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $device['name'],
                    'description' => "satelit na zařízení",
                    'logo' => null,
                    'url' => "/device/{$result_blankom_satelit['deviceId']}"
                ];
            }
        }

        // Blok pro vyhledávání dle satelitů a výpis zařízení s vazbou na nich
        $result_fte_satelits = FteInterface::where('sat', 'like', "%" . $request->search . "%")->get()->toArray();
        if (!empty($result_fte_satelits)) {
            foreach ($result_fte_satelits as $result_fte_satelit) {
                $device = Device::find($result_fte_satelit['deviceId']);
                $this->result[] = [
                    'id' => uniqid(),
                    'nazev' => $device['name'],
                    'description' => "satelit na zařízení",
                    'logo' => null,
                    'url' => "/device/{$result_fte_satelit['deviceId']}"
                ];
            }
        }
        return $this->result;
    }
}
