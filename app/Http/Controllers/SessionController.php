<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    /**
     * ulození session do db
     *
     * @param Request $request
     * @return void
     */
    public static function store(Request $request, $userId): void
    {
        $request->session()->put('user_id', $userId);
        $request->session()->put('ip_address', $_SERVER['REMOTE_ADDR']);
        $request->session()->put('user_agent', $_SERVER['HTTP_USER_AGENT']);
        $request->session()->put('payload', "neco je zde ");
    }
}
