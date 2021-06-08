<?php

namespace App\Http\Controllers;

use App\Events\Broadcast_notification;
use App\Events\Broadcast_every_body;

class BroadcastController extends Controller
{
    public static function broadcast_alert()
    {
        // 
    }


    public static function broadcast_notification_when_user_change_something($user, $state, $item): void
    {
        $notification_text = $user . " " . $state . " " . $item;
        broadcast(new Broadcast_notification($notification_text))->toOthers();
    }


    public static function broadcast_notification_every_body_include_my_self($text): void
    {
        broadcast(new Broadcast_every_body($text));
    }
}
