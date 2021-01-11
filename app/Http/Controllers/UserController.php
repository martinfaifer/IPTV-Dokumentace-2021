<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * fn pro získání přihlášeného uzivatele
     *
     * @return array
     */
    public function get_user(): array
    {
        if (!Auth::user()) {

            return [
                'status' => "error"
            ];
        }

        return [
            'status' => "success",
            'data' => Auth::user()
        ];
    }
}
