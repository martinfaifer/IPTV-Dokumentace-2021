<?php

namespace App\Http\Controllers;

use App\Models\H264;
use App\Models\H265;
use App\Models\UnicastKvalitaChannelOutput;
use App\Models\UnicastKvality;
use Illuminate\Http\Request;

class UnicastKvalitaChannelOutputController extends Controller
{

    public static function h264_update(Request $request): array
    {

        // validace
        if (
            is_null($request->p1080) &&
            is_null($request->p720) &&
            is_null($request->p576) &&
            is_null($request->p404)
        ) {

            return NotificationController::notify("error", "error", "Musí být vyplněna aspoň jedna kvalita!");
        }

        $h264 = H264::where('channelId', $request->channelId)->first();
        // ---------------------------------------------------------------------------

        if ($p1080 = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "1")->first()) {
            if (is_null($request->p1080)) {

                $p1080->delete();
            } else {
                UnicastKvalitaChannelOutput::where('h264Id', $h264->id)
                    ->where('kvalitaId', "1")->update(
                        ['output' => $request->p1080]
                    );
            }
        } else {
            if (!is_null($request->p1080)) {
                UnicastKvalitaChannelOutput::create(
                    [
                        'h264Id' => $h264->id,
                        'kvalitaId' => "1",
                        'output' => $request->p1080
                    ]
                );
            }
        }

        // ---------------------------------------------------------------------------

        if ($p720 = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "2")->first()) {
            if (is_null($request->p720)) {

                $p720->delete();
            } else {
                UnicastKvalitaChannelOutput::where('h264Id', $h264->id)
                    ->where('kvalitaId', "2")->update(
                        ['output' => $request->p720]
                    );
            }
        } else {
            if (!is_null($request->p720)) {
                UnicastKvalitaChannelOutput::create(
                    [
                        'h264Id' => $h264->id,
                        'kvalitaId' => "2",
                        'output' => $request->p720
                    ]
                );
            }
        }

        // ---------------------------------------------------------------------------


        if ($p576 = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "3")->first()) {
            if (is_null($request->p576)) {

                $p576->delete();
            } else {
                UnicastKvalitaChannelOutput::where('h264Id', $h264->id)
                    ->where('kvalitaId', "3")->update(
                        ['output' => $request->p576]
                    );
            }
        } else {
            if (!is_null($request->p576)) {
                UnicastKvalitaChannelOutput::create(
                    [
                        'h264Id' => $h264->id,
                        'kvalitaId' => "3",
                        'output' => $request->p576
                    ]
                );
            }
        }

        // ---------------------------------------------------------------------------

        if ($p404 = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "6")->first()) {
            if (is_null($request->p404)) {

                $p404->delete();
            } else {
                UnicastKvalitaChannelOutput::where('h264Id', $h264->id)
                    ->where('kvalitaId', "6")->update(
                        ['output' => $request->p404]
                    );
            }
        } else {
            if (!is_null($request->p404)) {
                UnicastKvalitaChannelOutput::create(
                    [
                        'h264Id' => $h264->id,
                        'kvalitaId' => "6",
                        'output' => $request->p404
                    ]
                );
            }
        }

        // ---------------------------------------------------------------------------
        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Upraveny Kvality"
            )
        ];
    }

    public function return_h264_output_for_edit(Request $request): array
    {
        // 1080 1, 720 2, 576 3

        $h264 = H264::where('channelId', $request->channelId)->first();

        return [
            'p1080' => UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "1")->first()->output ?? null,
            'p720' => UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "2")->first()->output ?? null,
            'p576' => UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "3")->first()->output ?? null,
            'p404' => UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->where('kvalitaId', "6")->first()->output ?? null
        ];
    }


    public function return_h265_output_for_edit(Request $request): array
    {
        // 1080 4, 720 5,

        $h265 = H265::where('channelId', $request->channelId)->first();

        return [
            'p1080' => UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->where('kvalitaId', "4")->first()->output ?? null,
            'p720' => UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->where('kvalitaId', "5")->first()->output ?? null,
        ];
    }

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
