<?php

namespace App\Http\Controllers;

use App\Models\Streamer;
use App\Models\StreamPort;
use Illuminate\Http\Request;
use App\Traits\NotificationTrait;

class StreamerController extends Controller
{
    use NotificationTrait;
    public function index()
    {
        return Streamer::all();
    }


    public function show($streamerId)
    {
        return ($streamer = Streamer::find($streamerId)) ? $streamer : [];
    }


    public function create(Request $request): array
    {
        if (empty($request->streamer_name) || empty($request->streamer_ip)) {
            return $this->frontend_notification("error", "error", "Musí být vše vyplněno");
        }

        if (Streamer::where('streamer_ip', $request->streamer_ip)->first()) {
            return $this->frontend_notification("error", "error", "IP již existuje u jiné streameru!");
        }

        Streamer::create($request->all());

        return $this->frontend_notification("suucess", "success", "Vytvořeno!");
    }


    public function destroy(Request $request): array
    {
        try {
            Streamer::find($request->id)->delete();

            return $this->frontend_notification("success", "success", "Odebráno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification("error", "error", "Nejdříve se musí odstranit vazba!");
        }
    }
}
