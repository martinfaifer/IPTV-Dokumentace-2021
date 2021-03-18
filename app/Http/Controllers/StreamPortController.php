<?php

namespace App\Http\Controllers;

use App\Models\StreamPort;
use Illuminate\Http\Request;

class StreamPortController extends Controller
{
    public function index(): array
    {
        return (!StreamPort::exists()) ? [] : StreamPort::all()->toArray();
    }


    public function show($portId)
    {
        return (!$port = StreamPort::find($portId)) ? [] : $port;
    }

    public function destroy(Request $request): array
    {
        if (!$port = StreamPort::find($request->id)) {
            return NotificationController::notify("error", "error", "Položka nenalezena!");
        }

        $port->delete();

        return NotificationController::notify("success", "success", "Smazáno!");
    }

    public function create(Request $request): array
    {

        if (
            empty($request->port_nuber) || empty($request->port_desc) || empty($request->port_output)
        ) {
            return NotificationController::notify("error", "error", "Musí být vše vyplněno!");
        }


        StreamPort::create([
            $request->all()
        ]);

        return NotificationController::notify("success", "success", "Vytvořeno");
    }
}
