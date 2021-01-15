<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Device;
use App\Models\PowerVuInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PowerVuInterfaceController extends Controller
{
    public static function return_fte_interfaces_with_data($powerVuId): array
    {
        // neexistuje zarízení s pripárovanými interfacy
        if (!PowerVuInterface::where('deviceId', $powerVuId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'inputs' => PowerVuInterface::where('deviceId', $powerVuId)->get()->toArray()
        ];
    }


    public function edit_interface(Request $request): array
    {
        // overení ze existuje zarizení napárovaný na interfacy 
        if (!PowerVuInterface::where('deviceId', $request->deviceId)->first()) {
            return [
                'status' => "error",
                'msg' => "Nepodařilo se vyhledat zařízení"
            ];
        }

        if (
            empty($request->sat) || is_null($request->sat) ||
            empty($request->dvb) || is_null($request->dvb) ||
            empty($request->freq) || is_null($request->freq) ||
            empty($request->polarizace) || is_null($request->polarizace) ||
            empty($request->symbolrate) || is_null($request->symbolrate) ||
            empty($request->asi) || is_null($request->asi) ||
            empty($request->fec) || is_null($request->fec)
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

            PowerVuInterface::where('deviceId', $request->deviceId)->update(
                [
                    "dvb" => $dvb,
                    "sat" => $sat,
                    "freq" => $request->freq,
                    "symbolRate" => $request->symbolrate,
                    "pol" => $polarizace,
                    "fec" => $request->fec,
                    "ASI" . $request->interfaceId => $request->ASI,
                ]
            );


            dispatch(new SendNotificationJob(
                Auth::user()->name,
                // vyhledání názvu zařízení 
                Device::where('id', $request->deviceId)->first()->name,
                "editoval"
            ));

            return [
                'status' => "success",
                'msg' => "Editováno"
            ];
        } catch (\Throwable $th) {
            //nepodarilo se provest editaci, bude vyvolána chyba 

            return [
                'status' => "error",
                'msg' => "Selhala editace! ERROR 500"
            ];
        }
    }


    public static function check_device_if_exist_and_create_or_delete(string $deviceId, string $action): void
    {
        if ($action === "create") {
            if (!PowerVuInterface::where('deviceId', $deviceId)->first()) {
                PowerVuInterface::create([
                    'deviceId' => $deviceId
                ]);
            }
        }


        if ($action === "delete") {
            if (PowerVuInterface::where('deviceId', $deviceId)->first()) {
                PowerVuInterface::where('deviceId', $deviceId)->first()->delete();
            }
        }
    }
}
