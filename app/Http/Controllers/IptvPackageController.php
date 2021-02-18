<?php

namespace App\Http\Controllers;

use App\Models\IptvPackage;

class IptvPackageController extends Controller
{
    /**
     * fn pro výpis všech balíčků
     *
     * @return array
     */
    public function return_packages(): array
    {
        if (!IptvPackage::first()) {
            return [];
        }

        return IptvPackage::get()->toArray();
    }
}
