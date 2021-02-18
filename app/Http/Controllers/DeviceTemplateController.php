<?php

namespace App\Http\Controllers;

use App\Models\DeviceTemplate;


class DeviceTemplateController extends Controller
{


    public static function template_generator()
    {

        // cil fn => vytvorení json, kde bude template pro daný typ zarízení, které si jej privlastní a bude jej editovat

        // nutno znát pocet portu 

        // test

        $template = array(
            "input" => array(
                1 => array(
                    "SAT" => "",
                    "LNB" => "",
                    "SymbolRate" => "",
                    "DVB" => "",
                    "LNB" => "",
                    "LNB22k" => ""
                ),
                2 => array(
                    "SAT" => "",
                    "LNB" => "",
                    "SymbolRate" => "",
                    "DVB" => "",
                    "LNB" => "",
                    "LNB22k" => ""
                ),
                3 => array(
                    "SAT" => "",
                    "LNB" => "",
                    "SymbolRate" => "",
                    "DVB" => "",
                    "LNB" => "",
                    "LNB22k" => ""
                ),
                4 => array(
                    "SAT" => "",
                    "LNB" => "",
                    "SymbolRate" => "",
                    "DVB" => "",
                    "LNB" => "",
                    "LNB22k" => ""
                ),
            ),
            "output" => array(
                1 => array(
                    "CI" => "",
                    "channles" => ""
                ),
                2 => array(
                    "CI" => "",
                    "channles" => ""
                ),
                3 => array(
                    "CI" => "",
                    "channles" => ""
                ),
                4 => array(
                    "CI" => "",
                    "channles" => ""
                )
            )
        );

        // update
        // $template['output'][1]["CI"] = "neco";
        if (!DeviceTemplate::where('popis', "poIp")->first()) {
            DeviceTemplate::create([
                'popis' => "poIp",
                'sablona' => json_encode($template)
            ]);
        }
    }
}
