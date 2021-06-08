<?php

namespace App\Traits;

trait StringTrait
{
    public static function get_date($date): string
    {
        if (is_null($date)) {
            return "";
        }

        $explodedDate = explode("-", $date);

        return substr($explodedDate[2], 0, 2) . "." . $explodedDate[1] . ". " . $explodedDate[0];
    }
}
