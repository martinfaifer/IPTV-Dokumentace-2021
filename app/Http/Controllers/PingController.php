<?php

namespace App\Http\Controllers;

use JJG\Ping;

class PingController extends Controller
{
    public static function ping($uri): bool
    {

        $url = explode('/', $uri);

        $ping = new Ping($url[2]);

        $latency = $ping->ping();
        // dump($latency);
        if ($latency !== false) {
            return true;
        } else {
            return false;
        }
    }
}
