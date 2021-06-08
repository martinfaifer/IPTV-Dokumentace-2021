<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;

class AuthController extends Controller
{

    use NotificationTrait;

    public function logout(Request $request): array
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return $this->frontend_notification("success", "success", "Odhlášeno");
    }


    public function logIn(Request $request): array
    {
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            SendNotificationController::send_email_with_error_500("test");
            return $this->frontend_notification("error", "error", "Nesprávné údaje!");
        }

        if (Auth::user()->status != "access") {
            // $this->send_email_with_error_500(Auth::user());
            SendNotificationController::send_email_with_error_500(Auth::user());
            Auth::logout();
            return $this->frontend_notification("error", "error", "Uživatel je zablokován!");
        }

        // overení stavu a pripadna zmena ( primárne urceno pro změnu stavu z waiting na access)
        $this->check_or_change_user_status(Auth::user()->id);

        return $this->frontend_notification("success", "success", "Přihlášeno");
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


    public function generate_api_token(Request $request): array
    {
        if (!$user = User::find($request->userId)) {
            return $this->frontend_notification("error", "Nenalezen uživatel!");
        }

        $user->update([
            'api_token' => Str::random(60)
        ]);

        return $this->frontend_notification("success", "Token vytvořen!");
    }

    public function remove_api_tokem(Request $request): array
    {
        if (!$user = User::find($request->userId)) {
            return $this->frontend_notification("error", "Nenalezen uživatel!");
        }

        $user->update([
            'api_token' => null
        ]);

        return $this->frontend_notification("success", "Token odebrán!");
    }
}
