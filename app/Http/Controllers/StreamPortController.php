<?php

namespace App\Http\Controllers;

use App\Models\StreamPort;
use Illuminate\Http\Request;
use App\Traits\NotificationTrait;

class StreamPortController extends Controller
{
    use NotificationTrait;

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
            return $this->frontend_notification("error", "error", "Položka nenalezena!");
        }

        $port->delete();

        return $this->frontend_notification("success", "success", "Odebráno!");
    }

    public function create(Request $request): array
    {
        if (
            empty($request->port_nuber) || empty($request->port_desc) || empty($request->port_output) || empty($request->device)
        ) {
            return $this->frontend_notification("error", "error", "Musí být vše vyplněno!");
        }

        StreamPort::create([
            'port_nuber' => $request->port_nuber,
            'port_output' => $request->port_output,
            'port_desc' => $request->port_desc,
            'device' => $request->device
        ]);

        return $this->frontend_notification("success", "success", "Vytvořeno");
    }
}
