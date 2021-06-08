<?php

namespace App\Http\Controllers;

use App\Models\BlankomInterface;
use App\Models\Device;
use App\Models\FteInterface;
use App\Models\SatelitCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Traits\NotificationTrait;

class SatelitCardController extends Controller
{
    use NotificationTrait;
    public function return_all(): array
    {
        if (!SatelitCard::first()) {
            return [];
        }

        return SatelitCard::get(['id', 'card_number'])->toArray();
    }


    public function return_card_number(Request $request)
    {
        if (!SatelitCard::where('id', $request->cardId)->first()) {
            return "neexistuje";
        }

        return SatelitCard::where('id', $request->cardId)->first()->card_number;
    }


    public function return_device_with_this_card(Request $request)
    {
        $cardNumber = $this->return_card_number($request);
        if ($cardNumber === "neexistuje") {
            return [
                'status' => "error"
            ];
        }

        if (FteInterface::where('CIA', $cardNumber)->orWhere('CIB', $cardNumber)->first()) {
            return
                [
                    'status' => "success",
                    'data' => Device::where('id', FteInterface::where('CIA', $cardNumber)->orWhere('CIB', $cardNumber)->first()->deviceId)->first()
                ];
        }

        if (BlankomInterface::where('CI1', $cardNumber)
            ->orWhere('CI2', $cardNumber)
            ->orWhere('CI3', $cardNumber)
            ->orWhere('CI4', $cardNumber)
            ->first()
        ) {
            return
                [
                    'status' => "success",
                    'data' => Device::where('id', BlankomInterface::where('CI1', $cardNumber)
                        ->orWhere('CI2', $cardNumber)
                        ->orWhere('CI3', $cardNumber)
                        ->orWhere('CI4', $cardNumber)
                        ->first()->deviceId)->first()
                ];
        }


        return [
            'status' => "error"
        ];
    }


    public function create(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'cardNumber' => ['required', 'unique:App\Models\SatelitCard,card_number']
        ]);
        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Karta není vyplněna nebo již existuje!");
        }

        try {
            SatelitCard::create(
                [
                    'card_number' => $request->cardNumber
                ]
            );

            BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "vytvořil kartu", $request->cardNumber);
            return $this->frontend_notification("success", "success", "Založeno");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }


    public function remove(Request $request): array
    {
        if (!$card = SatelitCard::find($request->cardId)) {
            return $this->frontend_notification("error", "error", "Neexistuje karta s tímto ID");
        }

        try {
            $card->delete();
            BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "odebral kartu", $card->card_number);
            return $this->frontend_notification("success", "success", "Odebráno");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }
}
