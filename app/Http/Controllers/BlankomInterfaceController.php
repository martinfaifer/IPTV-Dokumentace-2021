<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\BlankomInterface;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlankomInterfaceController extends Controller
{
    public static function return_blankom_interfaces_with_data($blankomId): array
    {

        // neexistuje zarízení s pripárovanými interfacy
        if (!BlankomInterface::where('deviceId', $blankomId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'inputs' => BlankomInterface::where('deviceId', $blankomId)->get()->toArray()
        ];
    }


    /**
     * editace interfaců , které patří danému zarizení ( zarizení musí existuvat zde , pokud neexistuje je vyvolán alert)
     *
     * až na fec, lnb, lnb22k a CI je vse nutné mít vyplněné ( nesmí být null nebo empty )
     * 
     * @param Request $request->deviceId, interfaceId , sat, dvb, freq, polarizace, symbolRate, fec, lnb, lnb22k, ci
     * @return array
     */
    public function edit_interface(Request $request): array
    {

        // overení ze existuje zarizení napárovaný na interfacy 
        if (!BlankomInterface::where('deviceId', $request->deviceId)->first()) {
            return [
                'status' => "error",
                'msg' => "Nepodařilo se vyhledat zařízení"
            ];
        }



        if (
            empty($request->interfaceId) || is_null($request->interfaceId) ||
            empty($request->sat) || is_null($request->sat) ||
            empty($request->dvb) || is_null($request->dvb) ||
            empty($request->freq) || is_null($request->freq) ||
            empty($request->polarizace) || is_null($request->polarizace) ||
            empty($request->symbolrate) || is_null($request->symbolrate)
        ) {
            return [
                'status' => "warning",
                'msg' => "Není vše řádně vyplněno"
            ];
        }
        try {
            // editace interfacu , dle $reques->interfaceId

            // overení zda je input object nebo string
            if (is_string($request->dvb)) {
                $dvb = $request->dvb;
            } else {
                $dvb = $request->dvb["dvb"];
            }


            if (is_string($request->sat)) {
                $sat = $request->dvb;
            } else {
                $sat = $request->sat["satelit"];
            }


            if (is_string($request->polarizace)) {
                $polarizace = $request->polarizace;
            } else {
                $polarizace = $request->polarizace["polarizace"];
            }

            BlankomInterface::where('deviceId', $request->deviceId)->update(
                [
                    "rf" . $request->interfaceId . "_sat" => $sat,
                    "rf" . $request->interfaceId . "_lnb" => $request->lnb,
                    "rf" . $request->interfaceId . "_symbolRate" => $request->symbolrate,
                    "rf" . $request->interfaceId . "_dvb" => $dvb,
                    "rf" . $request->interfaceId . "_lnb22k" => $request->lnb22k,
                    "rf" . $request->interfaceId . "_fec" => $request->fec,
                    "rf" . $request->interfaceId . "_freq" => $request->freq,
                    "rf" . $request->interfaceId . "_pol" => $polarizace,
                    "CI" . $request->interfaceId => $request->ci["card_number"] ?? null
                ]
            );

            dispatch(new SendNotificationJob(
                Auth::user()->name,
                // vyhledání názvu zařízení 
                Device::where('id', $request->deviceId)->first()->name . " RF" . $request->interfaceId,
                "editoval"
            ));

            return [
                'status' => "success",
                'msg' => "Editováno"
            ];
        } catch (\Throwable $th) {

            return NotificationController::notify();
        }
    }


    /**
     * zalození nebo odebrání zarizení
     *
     * @param string $deviceId
     * @param string $action
     * @return void
     */
    public static function check_device_if_exist_and_create_or_delete(string $deviceId, string $action): void
    {
        if ($action === "create") {
            if (!BlankomInterface::where('deviceId', $deviceId)->first()) {
                BlankomInterface::create([
                    'deviceId' => $deviceId
                ]);
            }
        }


        if ($action === "delete") {
            if (BlankomInterface::where('deviceId', $deviceId)->first()) {
                BlankomInterface::where('deviceId', $deviceId)->first()->delete();
            }
        }
    }
}
