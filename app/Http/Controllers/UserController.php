<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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


    public function create(Request $request): array
    {
        if (
            is_null($request->email) || empty($request->email) ||
            is_null($request->name) || empty($request->name) ||
            is_null($request->password) || empty($request->password) ||
            is_null($request->role) || empty($request->role)
        ) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Vše musí být vyplněné"
                )
            ];
        }

        if (!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Email má neplatný formát"
                )
            ];
        }

        if (User::where('email', $request->email)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Tento email již existuje"
                )
            ];
        }

        User::create(
            [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'user_role' => $request->role,
                'status' => "access"
            ]
        );

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Vytvořen nový uživatel"
            )
        ];
    }

    public function update(Request $request): array
    {

        if (
            is_null($request->email) || empty($request->email) ||
            is_null($request->name) || empty($request->name) ||
            is_null($request->userId) || empty($request->userId) ||
            is_null($request->role) || empty($request->role)
        ) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Vše musí být vyplněné"
                )
            ];
        }

        if (!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Email má neplatný formát"
                )
            ];
        }

        if (Auth::user()->id === $request->userId) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Pro tyto případy je zde uživatelská sekce"
                )
            ];
        }

        User::find($request->userId)->update(
            [
                'name' => $request->name,
                'email' => $request->email,
                'user_role' => $request->role
            ]
        );

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Užvatel upraven"
            )
        ];
    }


    public function delete(Request $request): array
    {
        if (is_null($request->userId) || empty($request->userId)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepovedlo se odebrat uživatele"
                )
            ];
        }

        if (Auth::user()->id === $request->userId) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Toto nejde ... "
                )
            ];
        }

        User::find($request->userId)->delete();
        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Užvatel odebrán"
            )
        ];
    }


    public function sessions()
    {
        return DB::select('select * from sessions where user_id = ?', [Auth::user()->id]);
    }

    public function change_password(Request $request): array
    {

        if (empty($request->password) || is_null($request->password)) {
            return NotificationController::notify("error", "error", "Vyplňte pole!");
        }

        User::find(Auth::user()->id)->update(
            [
                'password' => Hash::make($request->password),
            ]
        );

        return NotificationController::notify("success", "success", "Heslo bylo změno.");
    }
}
