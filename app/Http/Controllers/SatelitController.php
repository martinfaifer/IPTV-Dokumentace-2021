<?php

namespace App\Http\Controllers;

use App\Models\Satelit;
use Illuminate\Http\Request;

class SatelitController extends Controller
{
    public static function return_satelits(): array
    {
        if (!Satelit::first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'data' => Satelit::get(['satelit'])
        ];
    }
}
