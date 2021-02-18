<?php

namespace App\Http\Controllers;

use App\Mail\SendFileNotification;
use App\Mail\SendNotification;
use App\Mail\SendRebootStreamNotification;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class SendNotificationController extends Controller
{
    public static function notify(string $user, string $item, string $type): void
    {

        if (User::first()) {
            foreach (User::get(['email']) as $to_user) {
                Mail::to($to_user->email)->queue(new SendNotification($user, $item, $type));
            }
        }
    }


    public static function notifyRebootStream(string $streamName, string $status): void
    {
        if (User::first()) {
            foreach (User::get(['email']) as $to_user) {
                Mail::to($to_user->email)->queue(new SendRebootStreamNotification($streamName, $status));
            }
        }
    }


    public static function send_file_notification($mail, $text): void
    {
        Mail::to($mail)->queue(new SendFileNotification($mail, $text));
    }
}
