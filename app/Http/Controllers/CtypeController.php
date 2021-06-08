<?php

namespace App\Http\Controllers;

use App\Models\Ctype;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class CtypeController extends Controller
{

    use NotificationTrait;

    public function index()
    {
        return Ctype::all();
    }

    public function create(Request $request): array
    {

        $validation = Validator::make($request->all(), [
            'ctype_id' => 'required',
            'kodek' => 'required',
            'resolution' => 'required',
            'bitrate' => 'required',
            'description' => 'required',
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Není vše vyplněno");
        }

        try {
            if (Ctype::where('ctype_id', $request->ctypeId)->first()) {
                return $this->frontend_notification("error", "error", "Ctype ID již existuje");
            }

            Ctype::create([
                'ctype_id' => $request->ctypeId,
                'kodek' => $request->kodek,
                'resolution' => $request->resolution,
                'bitrate' => $request->bitrate,
                'description' => $request->description
            ]);

            return $this->frontend_notification("success", "success", "Vytořeno");
        } catch (\Throwable $th) {
            return $this->frontend_notification("error", "error", "Něco se nepovedlo");
        }
    }


    public static function find_ctypes_by_id(string $id, $allData = null): mixed
    {
        if (empty($id)) {
            return $id;
        }
        if (is_null($allData)) {
            if (Str::contains($id, ",")) {
                $ids = explode(",", $id);
                foreach ($ids as $ctype_id) {
                    $ctypesData[] = Ctype::find($ctype_id)->ctype_id;
                }

                return implode(",", $ctypesData);
            }

            return Ctype::find($id)->ctype_id;
        }

        if (Str::contains($id, ",")) {
            $ids = explode(",", $id);
            foreach ($ids as $ctype_id) {
                $ctype = Ctype::find($ctype_id);
                $ctypesData[] = [
                    'ctype_id' => $ctype->ctype_id,
                    'kodek' => $ctype->kodek,
                    'resolution' => $ctype->resolution,
                    'bitrate' => $ctype->bitrate
                ];
            }

            return $ctypesData;
        }

        return Ctype::find($id);
    }
}
