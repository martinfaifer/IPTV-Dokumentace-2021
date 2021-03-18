<?php

namespace App\Http\Controllers;

use App\Models\StreamerAndPortBound;
use App\Models\StreamPort;
use Illuminate\Http\Request;

class StreamerAndPortBoundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!StreamerAndPortBound::first()) {
            return [];
        }

        foreach (StreamerAndPortBound::all() as $streamerData) {
            $outputData[] = array(
                'id' => $streamerData->id,
                'streamer_id' => $streamerData->streamer->id,
                'streamer_name' => $streamerData->streamer->streamer_name,
                'streamer_ip' => $streamerData->streamer->streamer_ip,
                'port_id' => $streamerData->stream_port->id,
                'port_nuber' => $streamerData->stream_port->port_nuber,
                'port_output' => $streamerData->stream_port->port_output,
            );
        }
        return $outputData;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (is_null($request->portId) || empty($request->portId) || is_null($request->streamerId) || empty($request->streamerId)) {
            return NotificationController::notify("error", "error", "Nebylo vše vybráno!");
        }

        if (StreamerAndPortBound::where('streamer_id', $request->streamerId)->where('stream_port_id', $request->portId)->first()) {
            return NotificationController::notify("error", "error", "Tato vazba již existuje!");
        }

        StreamerAndPortBound::create([
            'streamer_id' => $request->streamerId,
            'stream_port_id' => $request->portId
        ]);

        return NotificationController::notify("success", "success", "Vazba vytvořena!");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StreamerAndPortBound  $streamerAndPortBound
     * @return \Illuminate\Http\Response
     */
    public function show(StreamerAndPortBound $streamerAndPortBound)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StreamerAndPortBound  $streamerAndPortBound
     * @return \Illuminate\Http\Response
     */
    public function edit(StreamerAndPortBound $streamerAndPortBound)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StreamerAndPortBound  $streamerAndPortBound
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StreamerAndPortBound $streamerAndPortBound)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StreamerAndPortBound  $streamerAndPortBound
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        StreamerAndPortBound::find($request->id)->delete();

        return NotificationController::notify("success", "success", "Odebráno!");
    }
}
