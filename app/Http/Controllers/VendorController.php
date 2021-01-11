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
}
