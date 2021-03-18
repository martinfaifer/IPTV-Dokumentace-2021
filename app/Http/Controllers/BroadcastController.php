<?php

namespace App\Http\Controllers;

use App\Events\Broadcast_external_alerts;
use Illuminate\Http\Request;

class BroadcastController extends Controller
{
    public static function broadcast_alerts()
    {
        $transcoder_alerts = ApiController::get_alerts();

        // if (array_key_exists("status", $transcoder_alerts)) {
        //     exit("nothink to broadcast!");
        // }

        $array_test = array(
            array(
                'name' => "TEST notifikace 1"
            ),
            array(
                'name' => "TEST notifikace 2"
            ),
            array(
                'name' => "TEST notifikace 3"
            ),
            array(
                'name' => "TEST notifikace 4"
            ),
            array(
                'name' => "TEST notifikace 5"
            ),
            array(
                'name' => "TEST notifikace 6"
            )
        );
        event(new Broadcast_external_alerts($array_test));
    }
}
