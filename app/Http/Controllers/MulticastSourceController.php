<?php

namespace App\Http\Controllers;

use App\Models\MulticastSource;
use Illuminate\Http\Request;

class MulticastSourceController extends Controller
{
    public function return_sources(): array
    {
        if (!MulticastSource::first()) {
            return [];
        }

        return MulticastSource::get()->toArray(['id', 'zdroj']);
    }



    /**
     * fn pro vyhledání zdroje a vrácení jej v poli nebo null
     *
     * @param [type] $id
     * @return void
     */
    public static function return_surce_id_zdroj_by_id_or_return_null($id)
    {
        if (is_null($id)) {
            return $id;
        }

        return [
            'id' => $id,
            'zdroj' => MulticastSource::where('id', $id)->first()->zdroj
        ];
    }
}
