<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Device;
use App\Models\PowerVuInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class PowerVuInterfaceController extends Controller
{
    use NotificationTrait;

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
        $validation = Validator::make($request->all(), [
            'sat' => 'required',
            'dvb' => 'required',
            'freq' => 'required',
            'polarizace' => 'required',
            'symbolrate' => 'required',
            'asi' => 'required',
            'fec' => 'required',
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Není vše vyplněno!");
        }

        // overení ze existuje zarizení napárovaný na interfacy 
        if (!PowerVuInterface::where('deviceId', $request->deviceId)->first()) {
            return $this->frontend_notification("error", "error", "Nepodařilo se vyhledat zařízení");
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

            return $this->frontend_notification("success", "success", "Upraveno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
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
