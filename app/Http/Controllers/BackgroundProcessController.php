<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use React\EventLoop\Factory;

class BackgroundProcessController extends Controller
{
    /**
     * fn pro notifikace do frontendu
     *
     * @return array
     */
    public static function get_alerts_from_dohled(): array
    {

        $loop = Factory::create();

        $loop->addPeriodicTimer(10, function () {
            return ApiController::check_notifications_from_dohled();
        });

        $loop->run();
    }
}
