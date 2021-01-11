<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelperController extends Controller
{
    /**
     * pomocna funkce pro zjistení zda existuje nebo je null hodnota a vrácení informace na zpět. 
     * FN je pouzitelná primarne na pouzitiv poly
     *
     * @param [type] $data
     * @return void
     */
    public static function check_if_is_and_return_data($data, $key)
    {
        if ($data) {
            return null;
        } else {
            return $data->$key;
        }
    }
}
