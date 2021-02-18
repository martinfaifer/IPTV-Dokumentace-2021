<?php

namespace App\Http\Controllers;

use App\Models\Api;
use App\Models\Channel;
use App\Models\ChannelToDohled;
use App\Models\H264;
use App\Models\H265;
use App\Models\Multicast;
use App\Models\UnicastKvalitaChannelOutput;
use GuzzleHttp\Client;

class ApiController extends Controller
{
    /**
     * fn pro výpis všech endpoitu po API
     *
     * @return array
     */
    public function return_endpoints(): array
    {
        if (!Api::first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'apis' => Api::all()
        ];
    }



    public static function analyze_stream(string $streamUri): array
    {
        try {
            if (!Api::where('type', "iptv_stream_analyze")->first()) {
                return [];
            }

            $apiData = Api::where('type', "iptv_stream_analyze")->first();


            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamUrl' => $streamUri . ":1234"
                ]
            ]);
            if ($body = $response->getBody()->getContents()) {
                return json_decode($body, true);
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }


    public static function check_if_is(): bool
    {
        if (!Api::first()) {
            return false;
        } else {
            return true;
        }
    }


    public static function check_notifications_from_dohled(): array
    {
        try {
            if (!Api::where('type', "iptv_alerts")->first()) {
                return [];
            }

            $apiData = Api::where('type', "iptv_alerts")->first();


            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                return json_decode($body, true);
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }


    public static function fill_doku_from_dohled()
    {

        try {
            //code...

            foreach (Multicast::where('stb_ip', "!=", null)->get(['channelId', 'stb_ip']) as $multicast) {

                $client = new Client;

                $response = $client->post("93.91.154.55/api/getInformationAboutStream", [
                    'form_params' => [
                        'hello' => "873134d5-6324-4555-aa6d-fcdb1f7a9f4f",
                        'multicastUri' => $multicast->stb_ip . ":1234"
                    ]
                ]);
                // echo $response->getStatusCode();
                if ($body = $response->getBody()->getContents()) {
                    $status = json_decode($body, true);

                    if ($status["status"] === "success") {

                        // vyhození již existujících
                        if (!ChannelToDohled::where('channelId', $multicast->channelId)->first()) {
                            ChannelToDohled::create(
                                [
                                    'channelId' => $multicast->channelId,
                                    'dohledId' => $status["streamData"][0]["streamId"]
                                ]
                            );
                        }
                    }
                }
            }

            // plnění h264 a h265
            if (H264::first()) {
                foreach (H264::get() as $h264) {
                    if (UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->first()) {
                        foreach (UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->get() as $h264Output) {
                            $output = str_replace("http://217.75.209.82:10224/udp/", "", $h264Output->output);
                            $output = str_replace("udp://", "", $h264Output->output);

                            $client = new Client;

                            $response = $client->post("93.91.154.55/api/getInformationAboutStream", [
                                'form_params' => [
                                    'hello' => "873134d5-6324-4555-aa6d-fcdb1f7a9f4f",
                                    'multicastUri' => $output
                                ]
                            ]);
                            if ($body = $response->getBody()->getContents()) {
                                $status = json_decode($body, true);

                                if ($status["status"] === "success") {

                                    // vyhození již existujících
                                    if (!ChannelToDohled::where('H264Id', $h264->id)->first()) {
                                        ChannelToDohled::create(
                                            [
                                                'H264Id' => $h264->id,
                                                'dohledId' => $status["streamData"][0]["streamId"]
                                            ]
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (H265::first()) {
                foreach (H265::get() as $h265) {
                    if (UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->first()) {
                        foreach (UnicastKvalitaChannelOutput::where('h264Id', $h265->id)->get() as $h265Output) {
                            $output = str_replace("http://217.75.209.82:10224/udp/", "", $h265Output->output);
                            $output = str_replace("udp://", "", $h265Output->output);
                            $client = new Client;

                            $response = $client->post("93.91.154.55/api/getInformationAboutStream", [
                                'form_params' => [
                                    'hello' => "873134d5-6324-4555-aa6d-fcdb1f7a9f4f",
                                    'multicastUri' => $output
                                ]
                            ]);
                            if ($body = $response->getBody()->getContents()) {
                                $status = json_decode($body, true);

                                if ($status["status"] === "success") {

                                    // vyhození již existujících
                                    if (!ChannelToDohled::where('H265Id', $h265->id)->first()) {
                                        ChannelToDohled::create(
                                            [
                                                'H265Id' => $h265->id,
                                                'dohledId' => $status["streamData"][0]["streamId"]
                                            ]
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }


    /**
     * založení stream do dohledu
     *
     * @param string $nazev
     * @param string $streamUrl
     * @param boolean $dohledovano
     * @param boolean $vytvaretNahled
     * @param string $status
     * @return void
     */
    public static function create_channel_to_dohled(string $nazev, string $streamUrl, bool $dohledovano, bool $vytvaretNahled, $channelId)
    {
        try {

            if (!Api::where('type', "iptv_stream_create")->first()) {
                return [];
            }

            $apiData = Api::where('type', "iptv_stream_create")->first();



            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'nazev' => $nazev,
                    "stream_url" => $streamUrl,
                    "dohledovano" => $dohledovano,
                    "vytvaretNahled" => $vytvaretNahled,
                    "status" => "waiting"
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $odpovedZeServeru = json_decode($body, true);
                if ($odpovedZeServeru["status"] === "success") {
                    if (!ChannelToDohled::where('channelId', $channelId)->first()) {
                        ChannelToDohled::create(
                            [
                                'channelId' => $channelId,
                                'dohledId' => $odpovedZeServeru["channelId"]
                            ]
                        );
                    }
                }
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }


    public static function return_information_about_channel($channelId): array
    {
        try {
            if (!Api::where('type', "iptv_stream_info")->first()) {
                return [];
            }

            $apiData = Api::where('type', "iptv_stream_info")->first();


            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamId' => $channelId
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                return json_decode($body, true);
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }


    public static function cerate_new_event($request, $streamId)
    {
        try {
            if (!Api::where('type', "iptv_event_create")->first()) {
                return [];
            }

            $apiData = Api::where('type', "iptv_event_create")->first();


            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamId' => $streamId,
                    "start_day" => $request->start_day,
                    "start_time" => $request->start_time,
                    "end_day" => $request->end_day,
                    "end_time" => $request->end_time,
                    "every_day" => null,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                return json_decode($body, true);
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }


    public function return_channels(): array
    {

        // multicasty
        foreach (Channel::all() as $channel) {
            // multicast
            $output[] = array(
                'nazev' => $channel->nazev,
                'url' => Multicast::where('channelId', $channel->id)->first()->stb_ip . ":1234"
            );
            // h264
            if ($h264 = H264::where('channelId', $channel->id)->first()) {
                if ($outputUri = UnicastKvalitaChannelOutput::where('h264Id', $h264->id)->first())
                    $output[] = array(
                        'nazev' => $channel->nazev . ". H264",
                        'url' => $outputUri->output
                    );
                unset($outputUri);
            }
            // h265
            if ($h265 =  H265::where('channelId', $channel->id)->first()) {
                if ($outputUri = UnicastKvalitaChannelOutput::where('h265Id', $h265->id)->first()) {
                    $output[] = array(
                        'nazev' => $channel->nazev . ". H265",
                        'url' => $outputUri->output
                    );
                }
                unset($outputUri);
            }
        }

        return $output;
    }






    /**
     * Transcodery
     */


    public static function return_transcoder_ip($transcoderName)
    {
        try {

            if (!Api::where('type', "transcoder")->first()) {
                return [];
            }

            $apiData = Api::where('type', "transcoder")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'transcoder' => $transcoderName,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $transcoderData = json_decode($body, true);
                if ($transcoderData["status"] === "success") {
                    return $transcoderData["ip"];
                } else {
                    return null;
                }
            }
        } catch (\Throwable $th) {
            return null;
        }
    }


    public static function try_to_find_streamId($address)
    {
        try {
            if (!Api::where('type', "transcoder_find_stream")->first()) {
                return [];
            }

            $apiData = Api::where('type', "transcoder_find_stream")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'address' => $address,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $transcoderData = json_decode($body, true);
                if ($transcoderData["status"] === "success") {
                    return $transcoderData["streamId"];
                } else {
                    return null;
                }
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }

    public static function get_streamStatus_from_transcoder($streamId)
    {
        try {
            if (!Api::where('type', "transcoder_stream_status")->first()) {
                return [];
            }

            $apiData = Api::where('type', "transcoder_stream_status")->first();



            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamId' => $streamId,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $transcoderData = json_decode($body, true);
                if ($transcoderData["status"] === "success") {
                    return $transcoderData["streamStatus"];
                } else {
                    return null;
                }
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }



    public static function reboot_stream($streamId)
    {
        try {
            if (!Api::where('type', "transcoder_stream_restart")->first()) {
                return [];
            }

            $apiData = Api::where('type', "transcoder_stream_restart")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamId' => $streamId,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $transcoderData = json_decode($body, true);
                return $transcoderData;
            }
        } catch (\Throwable $th) {
            return [
                'no response'
            ];
        }
    }



    public static function find_transcoder($streamId)
    {
        try {
            if (!Api::where('type', "transcoder_transcoder_find")->first()) {
                return [];
            }

            $apiData = Api::where('type', "transcoder_transcoder_find")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamId' => $streamId,
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $transcoderData = json_decode($body, true);
                return $transcoderData;
            }
        } catch (\Throwable $th) {
            return [
                "status" => 'no response'
            ];
        }
    }


    public static function send_action_to_transcoder($streamId, $akce): array
    {
        try {
            if (!Api::where('type', "transcoder_stream_manage")->first()) {
                return [];
            }

            $apiData = Api::where('type', "transcoder_stream_manage")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'streamId' => $streamId,
                    'akce' => $akce
                ]
            ]);
            // echo $response->getStatusCode();
            if ($body = $response->getBody()->getContents()) {
                $transcoderData = json_decode($body, true);
                return $transcoderData;
            }
        } catch (\Throwable $th) {
            return [
                "status" => 'no response'
            ];
        }
    }
}
