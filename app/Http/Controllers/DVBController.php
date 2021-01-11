<?php

namespace App\Http\Controllers;

use App\Models\DVB;
use Illuminate\Http\Request;

class DVBController extends Controller
{
    public function return_dvb(): array
    {
        if (!DVB::first()) {
            return [
                'status' => "empty"
            ];
        }


        return [
            'status' => "success",
            'data' => DVB::get(['dvb'])
        ];
    }
}
