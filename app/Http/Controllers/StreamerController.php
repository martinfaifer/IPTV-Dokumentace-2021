<?php

namespace App\Http\Controllers;

use App\Models\Streamer;
use App\Models\StreamPort;
use Illuminate\Http\Request;

class StreamerController extends Controller
{
    public function index(): array
    {
        return (!StreamPort::exists()) ? [] : Streamer::all()->toArray();
    }


    public function show($streamerId)
    {
        return ($streamer = Streamer::find($streamerId)) ? $streamer : [];
    }


    public function create(Request $request): array
    {
        if (empty($request->streamer_name) || empty($request->streamer_ip)) {
            return NotificationController::notify("error", "error", "Musí být vše vyplněno");
        }

        if (Streamer::where('streamer_ip', $request->streamer_ip)->first()) {
            return NotificationController::notify("error", "error", "IP již existuje u jiné streameru!");
        }

        Streamer::create($request->all());

        return NotificationController::notify("suucess", "success", "Vytvořeno!");
    }


    public function destroy(Request $request): array
    {
        try {

            Streamer::find($request->id)->delete();

            return NotificationController::notify("success", "success", "Odebráno!");
        } catch (\Throwable $th) {
            return NotificationController::notify("error", "error", "Nejdříve se musí odstranit vazba!");
        }
    }
}
