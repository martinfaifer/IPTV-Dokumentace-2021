<?php

namespace App\Http\Controllers;

use App\Models\IptvPackage;
use Illuminate\Http\Request;

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
