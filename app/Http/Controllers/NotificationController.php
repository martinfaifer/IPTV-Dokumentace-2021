<?php

namespace App\Http\Controllers;

class NotificationController extends Controller
{
    /**
     * notifikace do frontendu
     *
     * @param string $status (error, warning, success)
     * @param string $alertStatus (error, warning, success)
     * @param string $message ( zpráva do alert)
     * @param mixed $channelId ( id kanálu pro přesměrování)
     * @return array
     */
    public static function notify(string $status = "error", string $alertStatus = "error", string $message = "Error 500", $channelId = null): array
    {
        return [
            'status' => $status,
            'alert' => array(
                'status' => $alertStatus,
                'msg' => $message
            ),
            'channelId' => $channelId
        ];
    }
}
