<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{

    public function return_vendors(): array
    {

        if (!Vendor::first()) {
            return [
                'status' => "empty"
            ];
        }


        return [
            'status' => "success",
            'data' => Vendor::get(['vendor'])
        ];
    }

    public function return_device_vendor(Request $request): string
    {
        return Vendor::where(
            'id',
            Device::where('id', $request->deviceId)->first()->vendor
        )->first()->vendor;
    }


    /**
     * fn pro vyhledání názvu výrobce zarizeni
     *
     * @param string $vendorId
     * @return string
     */
    public static function return_vendor_by_id(string $vendorId): string
    {

        if (!Vendor::where('id', $vendorId)->first()) {
            return "Nezmáný výrobce";
        }


        return Vendor::where('id', $vendorId)->first()->vendor;
    }


    public static function check_if_vendor_is_know(string $vendorId, string $deviceId, string $action): void
    {
        // zjistení dza se jedná o Blankom , FTE nebo PowerVu ( dalsí budou príbývat casem ) id 1, 2, 5


        switch ($vendorId) {
            case "Blankom":

                BlankomInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, $action);
                FteInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                PowerVuInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                break;
            case "FTE":
                FteInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, $action);
                BlankomInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                PowerVuInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                break;
            case "Cisco":
                PowerVuInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, $action);
                FteInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                BlankomInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                break;
            default:
                BlankomInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                PowerVuInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
                FteInterfaceController::check_device_if_exist_and_create_or_delete($deviceId, "delete");
        }
    }
}
