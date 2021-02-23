<?php

namespace App\Http\Controllers;

use App\Models\BlankomInterface;
use App\Models\Device;
use App\Models\DeviceCategory;
use App\Models\FteInterface;
use App\Models\PowerVuInterface;
use App\Models\Satelit;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

class SatelitController extends Controller
{
    public static function return_satelits(): array
    {
        if (!Satelit::first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'data' => Satelit::get(['satelit'])
        ];
    }


    public static function get_satelit_result($satelit)
    {
        // vyhledání musí probíhat na úrovni tabulek blankom_interfaces, fte_interfaces, power_vu_interfaces
        $filteredOutput = array();

        if (BlankomInterface
            ::where('rf1_sat', $satelit)
            ->orWhere('rf2_sat', $satelit)
            ->orWhere('rf3_sat', $satelit)
            ->orWhere('rf4_sat', $satelit)
            ->first()
        ) {

            foreach (BlankomInterface
                ::where('rf1_sat', $satelit)
                ->orWhere('rf2_sat', $satelit)
                ->orWhere('rf3_sat', $satelit)
                ->orWhere('rf4_sat', $satelit)
                ->get(['deviceId']) as $device) {

                $device = Device::find($device->deviceId);
                // output
                $filteredOutput[] = array(
                    'id' => 'device_blnakom' . uniqid(),
                    'img' => "false",
                    'icon' => DeviceCategory::find($device->category)->icon,
                    'name' => $device->name,
                    'url' => '/device/' . $device->id
                );

                unset($device);
            }
        }


        if (FteInterface::where('sat', $satelit)->first()) {
            foreach (FteInterface::where('sat', $satelit)->get(['deviceId']) as $device) {

                $device = Device::find($device->deviceId);

                $filteredOutput[] = array(
                    'id' => 'device_fte' . uniqid(),
                    'img' => "false",
                    'icon' => DeviceCategory::find($device->category)->icon,
                    'name' => $device->name,
                    'url' => '/device/' . $device->id
                );

                unset($device);
            }
        }


        if (PowerVuInterface::where('sat', $satelit)->first()) {
            foreach (PowerVuInterface::where('sat', $satelit)->get(['deviceId']) as $device) {

                $device = Device::find($device->deviceId);

                $filteredOutput[] = array(
                    'id' => 'device_power' . uniqid(),
                    'img' => "false",
                    'icon' => DeviceCategory::find($device->category)->icon,
                    'name' => $device->name,
                    'url' => '/device/' . $device->id
                );

                unset($device);
            }
        }


        return $filteredOutput;
    }


    public static function show_interfaces_where_is_this_satelit(string $satelit): array
    {
        if (Str::contains($satelit, ',')) {

            $satelits = explode(",", $satelit);

            foreach ($satelits as $singleSatelit) {
                $output[] = self::get_satelit_result($singleSatelit);
            }

            if (count($output) >= 2) {
                $output = Arr::collapse($output);
            }

            return $output;
        } else {
            return self::get_satelit_result($satelit);
        }
    }
}
