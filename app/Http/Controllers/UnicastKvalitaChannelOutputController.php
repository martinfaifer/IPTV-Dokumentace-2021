<?php

namespace App\Http\Controllers;

use App\Models\H264;
use App\Models\H265;
use App\Models\UnicastKvalitaChannelOutput;
use App\Models\UnicastKvality;
use Illuminate\Http\Request;

class UnicastKvalitaChannelOutputController extends Controller
{
    public static function return_output_by_channel(Request $request)
    {

        if ($request->type === "h264") {


            // vyhledání h264ID
            $unicastId = H264::where('channelId', $request->channelId)->first()->id;

            // $request->channelId
            if (!UnicastKvalitaChannelOutput::where('h264id', $unicastId)->first()) {
                return [
                    'status' => "empty"
                ];
            }

            return [
                'status' => "success",
                'data' => self::fill_kvalita_to_output(UnicastKvalitaChannelOutput::where('h264id', $unicastId)->get())
            ];
        }

        if ($request->type === "h265") {


            // vyhledání h265ID
            $unicastId = H265::where('channelId', $request->channelId)->first()->id;

            // $request->channelId
            if (!UnicastKvalitaChannelOutput::where('h265id', $unicastId)->first()) {
                return [
                    'status' => "empty"
                ];
            }

            return [
                'status' => "success",
                'data' => self::fill_kvalita_to_output(UnicastKvalitaChannelOutput::where('h265id', $unicastId)->get())
            ];
        }
    }

    /**
     * fn pro doplnení pole o formát
     *
     * @param object $databyChannel
     * @return array
     */
    public static function fill_kvalita_to_output(object $databyChannel): array
    {

        foreach ($databyChannel as $data) {
            // $data->kvalitaId
            $output[] = array(
                "format" => UnicastKvality::where('id', $data->kvalitaId)->first()->kvalita,
                'output' => $data->output
            );
        }

        return $output;
    }
}
