<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

use App\Traits\NotificationTrait;

class ContactController extends Controller
{

    use NotificationTrait;

    public function validation(Request $request): bool
    {


        if (empty($request->email) && empty($request->full_name) && empty($request->telephone)) {
            return false;
        }

        if (!empty($request->email)) {
            if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    }


    public function index()
    {
    }


    public function create()
    {
    }

    public function store(Request $request): array
    {

        if (!$this->validation($request)) {
            return $this->frontend_notification("error", "error", "Neco se nepovedlo");
        }

        if (!empty($request->channelId)) {
            if (!Contact::where('channelId', $request->channelId)->first()) {

                Contact::create($request->all());

                return $this->frontend_notification("success", "success", "KVytvořeno");
            }

            return $this->frontend_notification("error", "error", "Kontakt již existuje");
        }

        if (!empty($request->cardId)) {
            if (!Contact::where('cardId', $request->cardId)->first()) {
                Contact::create($request->all());

                return $this->frontend_notification("success", "success", "Vytvořeno");
            }

            return $this->frontend_notification("error", "error", "Kontakt již existuje");
        }
    }

    public function show($channelId = null, $cardId = null): array
    {
        if (!is_null($channelId)) {
            if (!$contact = Contact::where('channelId', $channelId)->first()) {
                return [
                    'status' => "error"
                ];
            }

            return [
                'status' => "success",
                'data' => $contact
            ];
        }


        if (!is_null($cardId)) {
            if (!$contact = Contact::where('cardId', $cardId)->first()) {
                return [
                    'status' => "error"
                ];
            }

            return [
                'status' => "success",
                'data' => $contact
            ];
        }

        return [
            'status' => "error"
        ];
    }

    public function edit()
    {
    }

    public function update(Request $request): array
    {
        if (!$this->validation($request)) {
            return $this->frontend_notification("error", "error", "Neco se nepovedlo");
        }

        Contact::find($request->id)->update(
            $request->all()
        );

        return $this->frontend_notification("success", "success", "Upraveno");
    }

    public function destroy(Request $request): array
    {

        try {
            Contact::find($request->id)->delete();
            return $this->frontend_notification("success", "success", "Odebráno");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }
}
