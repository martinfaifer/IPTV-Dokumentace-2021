<?php

namespace App\Http\Controllers;

use App\Models\NanguIsp;
use Illuminate\Http\Request;
use App\Traits\NotificationTrait;

class NanguIspController extends Controller
{
    use NotificationTrait;

    public function index()
    {
        return NanguIsp::all();
    }

    public function show(Request $request)
    {
        return NanguIsp::findOrFail($request->id);
    }

    public function create(Request $request)
    {
        // 
    }

    public function update(NanguIsp $isp): array
    {
        try {
            $isp->id->update([
                'isp_name' => $isp->isp_name
            ]);

            return $this->frontend_notification("success", "success", "Upraveno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }

    public function delete(NanguIsp $isp): array
    {
        try {
            $isp->id->delete();
            return $this->frontend_notification("success", "success", "Odebráno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }
}
