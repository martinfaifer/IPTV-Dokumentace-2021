<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\ChannelToDohled;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{

    public function return_today_event(): array
    {
        if (!Event::where('start_day', date("Y-m-d"))->first()) {
            return [
                'status' => "error"
            ];
        }


        foreach (Event::where('start_day', date("Y-m-d"))->get() as $todayEvent) {
            // vyhledání kanálu / kanálu co mají na dnešní den naplánovanou událost

            $output[] = array(
                'channelId' => $todayEvent->multicastId,
                'channel' => Channel::where('id', $todayEvent->multicastId)->first()->nazev,
                'note' => $todayEvent->note
            );
        }


        return [
            'status' => "success",
            'events' => $output
        ];
    }


    public static function create(Request $request): array
    {
        // overení existence channel ID 
        if (!Channel::where('id', $request->channelId)->first()) {
            return [
                'status' => "error",
                "alert" => array(
                    'status' => "error",
                    'msg' => "Neexituje kanál s tímto ID "
                )
            ];
        }

        // overení, že hodnoty nejsou stejné
        if ($request->start_day . $request->start_time === $request->end_day . $request->end_time) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Začátek a konec nemohou být stejné"
                )
            ];
        }

        // založení 
        Event::create(
            [
                'start_day' => $request->start_day,
                'start_time' => $request->start_time,
                'end_day' => $request->end_day,
                'end_time' => $request->end_time,
                'repeat_every_day' => "no",
                'multicastId' => $request->channelId,
                'note' => $request->event_note
            ]
        );


        // pokud je $request->checkbox_create_to_dohled true , tak odeslat do queue a do dohledu. toto je možné pouze tehdy, pokud eistuje vazba na dohled
        // vyhledání v tabulce channel_to_dohleds vazby 
        if ($request->checkbox_create_to_dohled === true) {
            if ($channelData = ChannelToDohled::where('channelId', $request->channelId)->first()) {
                ApiController::cerate_new_event($request, $channelData->dohledId);
            }
        }
        // 

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "událost byla vytvořena"
            ),
            'channelId' => $request->channelId
        ];
    }


    public static function delete(Request $request): array
    {
        // delete fn
        return [];
    }

    public static function search_events_by_channelId(Request $request)
    {
        // $request->channelId
        if (!Event::where('multicastId', $request->channelId)->first()) {
            return [
                'status' => "error"
            ];
        }

        return [
            'status' => "success",
            'data' => Event::where('multicastId', $request->channelId)->get([
                'id', 'start_day', 'start_time', 'end_day', 'end_time', 'note'
            ])->toArray()
        ];
    }
}
