<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\ChannelToDohled;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    use NotificationTrait;

    public function index()
    {
        if (!Event::first()) {
            return [];
        }

        foreach (Event::all() as $event) {
            if (is_null($event->multicastId)) {
                $name = $event->title;
            } else {
                $name = Channel::find($event['multicastId'])->nazev . " - " . $event->title;
            }
            $events[] = array(
                'id' => $event->id,
                'name' => $name,
                'start_day' => $event->start_day,
                'start_time' => $event->start_time,
                'start' => $event->start_day . " " . $event->start_time,
                'end_day' => $event->end_day,
                'end_time' => $event->end_time,
                'end' => $event->end_day . " " . $event->end_time,
                'event_note' => $event->note,
                'title' => $event->title ?? '',
                'color' => $event->color ?? "info"
            );
        }

        return $events;
    }


    public function update(Request $request): array
    {

        $validation = Validator::make($request->all(), [
            'start_day' => 'required',
            'start_time' => 'required',
            'end_day' => 'required',
            'end_time' => 'required',
            'event_note' => 'required',
            'event_title' => 'required',
            'event_color' => 'required',
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("warning", "warning", "Není vše vyplněno");
        }

        // $request->eventId , start_day, start_time, end_day, end_time, event_note
        if (!$event = Event::find($request->eventId)) {
            return $this->frontend_notification("error", "error", "Neexistuje událost s tímto Id!");
        }

        $event->update([
            'start_day' => $request->start_day,
            'start_time' => $request->start_time,
            'end_day' => $request->end_day,
            'end_time' => $request->end_time,
            'note' => $request->event_note,
            'title' => $request->event_title,
            'color' => $request->event_color
        ]);


        BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "upravil událost s popisem", $request->event_note);

        return $this->frontend_notification("success", "success", "Upraveno!");
    }

    public function return_today_event(): array
    {
        if (!Event::where('start_day', date("Y-m-d"))->first()) {
            return [
                'status' => "error"
            ];
        }

        foreach (Event::where('start_day', date("Y-m-d"))->get() as $todayEvent) {
            // vyhledání kanálu / kanálu co mají na dnešní den naplánovanou událost

            if (is_null($todayEvent->multicastId)) {
                $title = $todayEvent->title;
            } else {
                $title = $todayEvent->title . " " . Channel::find($todayEvent['multicastId'])->nazev;
            }

            $output[] = array(
                'channelId' => $todayEvent->multicastId,
                'title' => $title,
                'note' => $todayEvent->note . ' od ' . $todayEvent->start_day . ' ' . $todayEvent->start_time . ' do ' . $todayEvent->end_day . ' ' . $todayEvent->end_time
            );
        }

        return [
            'status' => "success",
            'events' => $output
        ];
    }


    public static function create(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'start_day' => 'required',
            'start_time' => 'required',
            'end_day' => 'required',
            'end_time' => 'required',
            'event_note' => 'required',
            'event_title' => 'required',
            'event_color' => 'required',
        ]);

        if ($validation->fails()) {
            return self::frontend_notification("warning", "warning", "Není vše vyplněno");
        }

        if (isset($request->channelId)) {
            // overení existence channel ID 
            if (!Channel::where('id', $request->channelId)->first()) {
                return self::frontend_notification("error", "error", "Neexituje kanál s tímto ID!");
            }
        }

        // overení, že hodnoty nejsou stejné
        if ($request->start_day . $request->start_time === $request->end_day . $request->end_time) {
            return self::frontend_notification("error", "error", "Začátek a konec nemohou být stejné!");
        }

        // založení 
        Event::create(
            [
                'start_day' => $request->start_day,
                'start_time' => $request->start_time,
                'end_day' => $request->end_day,
                'end_time' => $request->end_time,
                'repeat_every_day' => "no",
                'multicastId' => $request->channelId ?? null,
                'note' => $request->event_note,
                'title' => $request->event_title,
                'when_to_notify' => $request->when_to_notify ?? null,
                'color' => $request->event_color
            ]
        );


        // pokud je $request->checkbox_create_to_dohled true , tak odeslat do queue a do dohledu. toto je možné pouze tehdy, pokud eistuje vazba na dohled
        // vyhledání v tabulce channel_to_dohleds vazby 
        if ($request->checkbox_create_to_dohled === true) {
            if ($channelData = ChannelToDohled::where('channelId', $request->channelId)->first()) {
                ApiController::cerate_new_event($request, $channelData->dohledId);
            }
        }


        BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "vytvořil událost", $request->event_note);

        return self::frontend_notification("success", "success", "Vytvořeno!", $request->channelId);
    }


    public static function delete(Request $request): array
    {
        if (!$event = Event::find($request->eventId)) {
            return self::frontend_notification("error", "error", "Událost neexistuje!");
        }

        $event->delete();

        BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "odebral událost", $request->event_note);

        return self::frontend_notification("success", "success", "Odebráno!");
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
                'id', 'start_day', 'start_time', 'end_day', 'end_time', 'title'
            ])->toArray()
        ];
    }

    public static function delete_passed_events(): void
    {
        if (Event::where('end_day', "<", date("Y-m-d"))->first()) {
            // delete
            foreach (Event::where('end_day', "<", date("Y-m-d"))->get() as $event) {
                $event->delete();
            }
        }
    }


    public function notify(): array
    {
        if (!Event::where('when_to_notify', date("Y-m-d"))->first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'events' => Event::where('when_to_notify', date("Y-m-d"))->get(),
            'count' => Event::where('when_to_notify', date("Y-m-d"))->get()->count()
        ];
    }
}
