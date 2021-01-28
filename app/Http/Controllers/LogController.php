<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{

    public static function store($component, $payload, $errorType)
    {
        Log::create(
            [
                'component' => $component,
                'payload' => $payload,
                'errorType' => $errorType,
            ]
        );
    }
}
