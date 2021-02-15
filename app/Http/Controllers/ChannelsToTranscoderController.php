<?php

namespace App\Http\Controllers;

use App\Models\ChannelsToTranscoder;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\UnicastKvalitaChannelOutput;
use Illuminate\Http\Request;

class ChannelsToTranscoderController extends Controller
{
    public static function try_to_find_channels_and_create_bind()
    {

        // Vyhledání nejdrive v H264 a následně v H265

        if (H264::first()) {

            foreach (H264::get() as $h264) {

                if (UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->first()) {
                    $output = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->first()->output;
                    $output = str_replace("http://217.75.209.82:10224/udp/", "", $output);
                    $output = str_replace("udp://", "", $output);

                    $transcoderStreamId = ApiController::try_to_find_streamId(
                        $output
                    );

                    if (!is_null($transcoderStreamId)) {
                        if (!ChannelsToTranscoder::where('H264Id', $h264->id)->first()) {
                            ChannelsToTranscoder::create(
                                [
                                    'H264Id' => $h264->id,
                                    'transcoderId' => $transcoderStreamId
                                ]
                            );
                        }
                    }
                }
            };
        }


        if (H265::first()) {

            foreach (H265::get() as $h265) {

                if (UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->first()) {
                    $output = UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->first()->output;
                    $output = str_replace("http://217.75.209.82:10224/udp/", "", $output);
                    $output = str_replace("udp://", "", $output);

                    $transcoderStreamId = ApiController::try_to_find_streamId(
                        $output
                    );

                    if (!is_null($transcoderStreamId)) {
                        if (!ChannelsToTranscoder::where('H265Id', $h265->id)->first()) {
                            ChannelsToTranscoder::create(
                                [
                                    'H265Id' => $h265->id,
                                    'transcoderId' => $transcoderStreamId
                                ]
                            );
                        }
                    }
                }
            };
        }
    }



    public static function find_transcoder(): void
    {

        // získání dat z ChannelsToTranscoder
        if (ChannelsToTranscoder::first()) {
            // 
            foreach (ChannelsToTranscoder::get() as $channelOnTranscoder) {

                // $channelOnTranscoder->transcoderId => id streamu na transcoderu

                // api komunikace, kde výsledkem by měla být informace o názvu transcoderu
                $responseFromTranscoder = ApiController::find_transcoder($channelOnTranscoder->transcoderId);

                if ($responseFromTranscoder["status"] === 'success') {

                    // echo $responseFromTranscoder["msg"] . PHP_EOL;

                    // Vyhledání transcoderu dle názvu v odpovedi
                    if ($transcoder = Device::where('name', $responseFromTranscoder["msg"])->first()) {
                        // $transcoder->id

                        // update zaznamu
                        if (!is_null($channelOnTranscoder->H264Id)) {
                            // update tabulky H264
                            H264::find($channelOnTranscoder->H264Id)->update(
                                [
                                    'deviceId' => $transcoder->id
                                ]
                            );
                        } else {
                            H265::find($channelOnTranscoder->H265Id)->update(
                                [
                                    'deviceId' => $transcoder->id
                                ]
                            );
                        }
                    }
                }
            }
        }
    }
}
