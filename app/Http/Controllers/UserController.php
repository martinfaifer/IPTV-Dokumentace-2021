<?php

namespace App\Http\Controllers;

use App\Jobs\SendError500Notification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Traits\StringTrait;
use App\Traits\NotificationTrait;

class UserController extends Controller
{
    use StringTrait;
    use NotificationTrait;

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


        foreach (User::all() as $user) {
            $users[] = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'user_role' => $user->user_role,
                'photo' => $user->photo,
                'status' => $this->check_status($user->status),
                'created' => $this->get_date($user->created_at),
                'updated' => $this->get_date($user->updated_at)
            ];
        }

        return [
            'status' => "success",
            'users' => $users
        ];
    }

    public function create(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'name' => ['required'],
            'password' => ['required'],
            'role' => ['required']
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Nepodařilo se založit uživatele");
        }

        if (User::where('email', $request->email)->first()) {
            return $this->frontend_notification("warning", "warning", "Email již existuje!");
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

        return $this->frontend_notification("success", "success", "Vytvořeno!");
    }

    public function update(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'name' => ['required'],
            'role' => ['required']
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", 'Nastala chyba!');
        }

        if (!isset($request->userId)) {
            return $this->frontend_notification("error", "error", "Nastala chyba");
        }

        if (Auth::user()->id === $request->userId) {
            return $this->frontend_notification("warning", "warning", "Pro tyto případy je zde uživatelská sekce");
        }

        User::find($request->userId)->update(
            [
                'name' => $request->name,
                'email' => $request->email,
                'user_role' => $request->role,
                'status' => $this->check_status($request->status, "true")
            ]
        );

        return $this->frontend_notification("success", "success", "Upraveno");
    }


    public function delete(Request $request): array
    {
        if (is_null($request->userId) || empty($request->userId)) {
            return $this->frontend_notification("error", "error", "Nastala chyba!");
        }

        if (Auth::user()->id === $request->userId) {
            return $this->frontend_notification("warning", "warning", "Nelze smazat sam sebe");
        }

        User::find($request->userId)->delete();
        return $this->frontend_notification("success", "success", "Odebráno");
    }


    public function store_photo(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'photo' => ['image']
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Neplatný formát!!");
        }

        $file = $request->file('photo');
        $name = '/Users_photos/' . uniqid() . '.' . $file->extension();
        $file->storePubliclyAs('public', $name);

        // ulození 
        User::find(Auth::user()->id)->update([
            'photo' => '/storage/' . $name,
        ]);

        return $this->frontend_notification("success", "success", "Fotka uložena!");
    }


    public function show_foto()
    {
        $user = User::find(Auth::user()->id);
        if (is_null($user->photo)) {
            return null;
        }

        return [[
            'photo' => $user->photo
        ]];
    }

    public function delete_photo(Request $request): array
    {
        try {
            $user = User::find(Auth::user()->id);
            unlink(str_replace("/storage/", "storage/", $user->photo));
            $user->update([
                'photo' => null
            ]);

            return $this->frontend_notification("success", "success", "Fotka odebrána!");
        } catch (\Throwable $th) {
            SendError500Notification::dispatch($th);
            return $this->frontend_notification();
        }
    }

    public function sessions()
    {
        return DB::select('select * from sessions where user_id = ?', [Auth::user()->id]);
    }

    public function change_password(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'password' => ['required']
        ]);
        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Vyplňte pole!");
        }

        User::find(Auth::user()->id)->update(
            [
                'password' => Hash::make($request->password),
            ]
        );

        return $this->frontend_notification("success", "success", "Heslo bylo změno.");
    }

    protected function check_status($status, $isUserUpdated = null)
    {
        if (is_null($isUserUpdated)) {
            if ($status === 'access') {
                return true;
            }

            return false;
        }

        if ($status === true) {
            return "access";
        }

        return "blocked";
    }
}
