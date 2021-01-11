<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function logout(Request $request): void
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }


    public function logIn(Request $request): array
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {

            if (Auth::user()->user_status != "block") {

                // overení stavu a pripadna zmena ( primárne urceno pro změnu stavu z waiting na access)
                $this->check_or_change_user_status(Auth::user()->id);

                return [
                    'isAlert' => "isAlert",
                    'status' => "success",
                    'msg' => "Úspěšně přihlášeno",
                ];
            } else {
                Auth::logout();
                return [
                    'isAlert' => "isAlert",
                    'status' => "error",
                    'msg' => "Uživatel je zablokován!",
                ];
            }
        } else {
            return [
                'isAlert' => "isAlert",
                'status' => "error",
                'msg' => "Nesprávné údaje!",
            ];
        }
    }

    /**
     * fm pro změnu stavu uživatele
     *
     * @param string $userId
     * @return void
     */
    public function check_or_change_user_status(string $userId): void
    {
        if (User::where('id', $userId)->first()->status != "access") {
            User::where('id', $userId)->update(
                [
                    'status' => "access"
                ]
            );
        }
    }
}
