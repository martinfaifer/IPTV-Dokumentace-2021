<?php

namespace App\Http\Controllers;

use App\Models\StreamerAndPortBound;
use App\Models\StreamPort;
use Illuminate\Http\Request;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class StreamerAndPortBoundController extends Controller
{
    use NotificationTrait;
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
                'local_ip' => $streamerData->streamer->local_ip,
                'port_id' => $streamerData->stream_port->id,
                'port_nuber' => $streamerData->stream_port->port_nuber,
                'port_output' => $streamerData->stream_port->port_output,
                'port_desc' => $streamerData->stream_port->port_desc,
                'ottstring' => $this->check_ott($streamerData->ottstring),
                'ctypes_pc' => CtypeController::find_ctypes_by_id($streamerData->ctypes_pc),
                'ctypes_android_tv' => CtypeController::find_ctypes_by_id($streamerData->ctypes_android_tv),
                'ctypes_samsung_tv' => CtypeController::find_ctypes_by_id($streamerData->ctypes_samsung_tv),
                'ctypes_screenshoter' => CtypeController::find_ctypes_by_id($streamerData->ctypes_screenshoter),
                'ctypes_stb_h265' => CtypeController::find_ctypes_by_id($streamerData->ctypes_stb_h265),
                'ctypes_stb' => CtypeController::find_ctypes_by_id($streamerData->ctypes_stb),
                'ctypes_mobile' => CtypeController::find_ctypes_by_id($streamerData->ctypes_mobile),
            );
        }
        return $outputData;
    }

    public static function check_ott($ottstring): bool
    {
        if (is_null($ottstring)) {
            return false;
        }

        if ($ottstring != true) {
            return false;
        }

        return true;
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

        $validation = Validator::make($request->all(), [
            'portId' => 'required',
            'streamerId' => 'required'
        ]);
        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Není vše vyplněno!");
        }

        if (StreamerAndPortBound::where('streamer_id', $request->streamerId)->where('stream_port_id', $request->portId)->first()) {
            return $this->frontend_notification("error", "error", "Tato vazba již existuje!");
        }

        StreamerAndPortBound::create([
            'streamer_id' => $request->streamerId,
            'stream_port_id' => $request->portId,
            'ctypes_mobile' => implode(",", $request->ctypes_mobile),
            'ctypes_stb' => implode(",", $request->ctypes_stb),
            'ctypes_stb_h265' => implode(",", $request->ctypes_stb_h265),
            'ctypes_screenshoter' => implode(",", $request->ctypes_screenshoter),
            'ctypes_samsung_tv' => implode(",", $request->ctypes_samsung_tv),
            'ctypes_android_tv' => implode(",", $request->ctypes_android_tv),
            'ctypes_pc' => implode(",", $request->ctypes_pc),
            'ottstring' => $request->ottstring
        ]);

        return $this->frontend_notification("success", "success", "Vazba vytvořena!");
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
        try {
            StreamerAndPortBound::find($request->id)->delete();

            return $this->frontend_notification("success", "success", "Odebráno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }
}
