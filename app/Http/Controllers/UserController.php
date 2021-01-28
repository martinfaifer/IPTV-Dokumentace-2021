<?php

namespace App\Http\Controllers;

use App\Models\User;
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

    public function get_users(): array
    {
        if (!User::first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'users' => User::all()
        ];
    }
}
