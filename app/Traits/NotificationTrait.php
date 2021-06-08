<?php

namespace App\Traits;

use App\Mail\SendError500Mail;
use Illuminate\Support\Facades\Mail;

trait NotificationTrait
{
    public static function frontend_notification(string $status = "error", string $alertStatus = "error", string $message = "Error 500"): array
    {
        return [
            'status' => $status,
            'alert' => array(
                'status' => $alertStatus,
                'msg' => $message
            )
        ];
    }

    public static function send_email_with_error_500($payload): void
    {
        Mail::to("martinfaifer@gmail.com")->send(new SendError500Mail($payload));
    }
}
