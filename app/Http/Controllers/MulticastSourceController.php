<?php

namespace App\Http\Controllers;

use App\Models\Multicast;
use App\Models\MulticastSource;
use Illuminate\Http\Request;

class MulticastSourceController extends Controller
{

    public $success =  [
        'status' => "success",
        'alert' => array(
            'status' => "success",
            'msg' => "Akce byla úspěšná"
        )
    ];


    public $error =  [
        'status' => "error",
        'alert' => array(
            'status' => "error",
            'msg' => "Chyba"
        )
    ];

    public $info =  [
        'status' => "error",
        'alert' => array(
            'status' => "info",
            'msg' => "Zdroje jsou stejné"
        )
    ];

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

    public function create(Request $request): array
    {

        if (is_null($request->source) || empty($request->source)) {
            return $this->error;
        }


        if (MulticastSource::where('zdroj', $request->source)->first()) {
            return $this->error;
        }

        MulticastSource::create(
            [
                'zdroj' => $request->source
            ]
        );

        return $this->success;
    }


    public function update(Request $request): array
    {
        if (
            is_null($request->sourceId) || empty($request->sourceId) ||
            is_null($request->source) || empty($request->source)
        ) {
            return $this->error;
        }

        $currentSource = MulticastSource::find($request->sourceId);
        if ($currentSource->zdroj === $request->source) {
            return $this->info;
        }

        if (MulticastSource::where('zdroj', $request->source)->first()) {
            return $this->error;
        }

        $currentSource->update(
            [
                'zdroj' => $request->source
            ]
        );

        return $this->success;
    }


    public function delete(Request $request): array
    {
        if (is_null($request->sourceId) || empty($request->sourceId)) {
            return $this->error;
        }


        if (Multicast::where('zdrojId', $request->sourceId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Zdroj je přiřazen ke kanálům"
                )
            ];
        }

        MulticastSource::find($request->sourceId)->delete();
        return $this->success;
    }
}
