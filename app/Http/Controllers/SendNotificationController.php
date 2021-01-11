<?php

namespace App\Http\Controllers;

use App\Mail\SendNotification;
use App\Models\User;
use Illuminate\Http\Request;
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
}
