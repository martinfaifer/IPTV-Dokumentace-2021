<?php

namespace App\Http\Controllers;

use App\Models\Multicast;

class ChannelToDohledController extends Controller
{
    public static function try_to_find_channel_on_dohled()
    {
        // vyhledání multicastu, unicastu na dohledu a připárování id

        // multicasty
        foreach (Multicast::get('id', 'stb_ip') as $multicast) {
            // 
        }
    }
}
