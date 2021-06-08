<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Device;
use App\Models\FteInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class FteInterfaceController extends Controller
{

    use NotificationTrait;

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

        $validation = Validator::make($request->all(), [
            'sat' => 'required',
            'dvb' => 'required',
            'freq' => 'required',
            'polarizace' => 'required',
            'symbolrate' => 'required',
            'fec' => 'required',
        ]);
        if ($validation->fails()) {
            return $this->frontend_notification("warning", "warning", "Není vše vyplněno!");
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

            // overeni, zda existuje v $request->ci klic card_number
            if (is_array($request->cia)) {
                $cia = $request->cia['card_number'];
            } else {
                $cia = $request->cia ?? null;
            }

            if (is_array($request->cib)) {
                $cib = $request->cib['card_number'];
            } else {
                $cib = $request->cib ?? null;
            }

            FteInterface::where('deviceId', $request->deviceId)->update(
                [
                    "dvb" => $dvb,
                    "sat" => $sat,
                    "freq" => $request->freq,
                    "symbolRate" => $request->symbolrate,
                    "polarizace" => $polarizace,
                    "fec" => $request->fec,
                    "CIA" . $request->interfaceId => $cia,
                    "CIB" . $request->interfaceId => $cib,
                ]
            );


            dispatch(new SendNotificationJob(
                Auth::user()->name,
                Device::where('id', $request->deviceId)->first()->name,
                "editoval"
            ));

            return $this->frontend_notification("success", "success", "Upraveno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
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
