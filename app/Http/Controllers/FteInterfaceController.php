<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Device;
use App\Models\FteInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FteInterfaceController extends Controller
{
    public static function return_fte_interfaces_with_data($fteId): array
    {
        // neexistuje zarízení s pripárovanými interfacy
        if (!FteInterface::where('deviceId', $fteId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'inputs' => FteInterface::where('deviceId', $fteId)->get()->toArray()
        ];
    }

    /**
     * editace interfaců , které patří danému zarizení ( zarizení musí existuvat zde , pokud neexistuje je vyvolán alert)
     *
     * všechny hodnoty az na cia a cib musí být obsazeny a nesmí mít hodnotu null nebo být empty 
     * 
     * @param Request $request->deviceId,  , sat, dvb, freq, polarizace, symbolRate, fec, cia a cib
     * @return array
     */
    public function edit_interface(Request $request): array
    {
        // overení ze existuje zarizení napárovaný na interfacy 
        if (!FteInterface::where('deviceId', $request->deviceId)->first()) {
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

            FteInterface::where('deviceId', $request->deviceId)->update(
                [
                    "dvb" => $dvb,
                    "sat" => $sat,
                    "freq" => $request->freq,
                    "symbolRate" => $request->symbolrate,
                    "polarizace" => $polarizace,
                    "fec" => $request->fec,
                    "CIA" . $request->interfaceId => $request->cia,
                    "CIB" . $request->interfaceId => $request->cib,
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
            if (!FteInterface::where('deviceId', $deviceId)->first()) {
                FteInterface::create([
                    'deviceId' => $deviceId
                ]);
            }
        }


        if ($action === "delete") {
            if (FteInterface::where('deviceId', $deviceId)->first()) {
                FteInterface::where('deviceId', $deviceId)->first()->delete();
            }
        }
    }
}
