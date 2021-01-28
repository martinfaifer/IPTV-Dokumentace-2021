<?php

namespace App\Http\Controllers;

use App\Models\BlankomInterface;
use App\Models\Device;
use App\Models\FteInterface;
use App\Models\SatelitCard;
use Illuminate\Http\Request;

class SatelitCardController extends Controller
{
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
}
