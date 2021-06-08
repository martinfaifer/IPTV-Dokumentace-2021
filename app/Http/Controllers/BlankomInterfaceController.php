<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\BlankomInterface;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class BlankomInterfaceController extends Controller
{

    use NotificationTrait;

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
            return $this->frontend_notification("error", "error", 'Nepodařilo se vyhledat zařízení');
        }

        $validation = Validator::make($request->all(), [
            'interfaceId' => ['required'],
            'sat' => ['required'],
            'dvb' => ['required'],
            'freq' => ['required'],
            'polarizace' => ['required'],
            'symbolrate' => ['required']
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("warning", "warning", 'Není vše vyplněno!');
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
                $sat = $request->sat;
            } else {
                $sat = $request->sat["satelit"];
            }


            if (is_string($request->polarizace)) {
                $polarizace = $request->polarizace;
            } else {
                $polarizace = $request->polarizace["polarizace"];
            }

            // overeni, zda existuje v $request->ci klic card_number
            if (is_array($request->ci)) {
                $ci = $request->ci['card_number'];
            } else {
                $ci = $request->ci ?? null;
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
                    "CI" . $request->interfaceId => $ci
                ]
            );

            dispatch(new SendNotificationJob(
                Auth::user()->name,
                // vyhledání názvu zařízení 
                Device::where('id', $request->deviceId)->first()->name . " RF" . $request->interfaceId,
                "editoval"
            ));

            return $this->frontend_notification("success", "success", "Upraveno!");
        } catch (\Throwable $th) {

            return $this->frontend_notification();
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
