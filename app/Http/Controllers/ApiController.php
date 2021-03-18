<?php

namespace App\Http\Controllers;

use App\Models\Api;
use App\Models\Channel;
use App\Models\ChannelToDohled;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\M3u8;
use App\Models\Multicast;
use App\Models\UnicastChunkStoreId;
use App\Models\UnicastKvalitaChannelOutput;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public $token = "d4c3ed93-3768-48c0-98b6-1717108157e9";

    /**
     * ověření připojení externího systemu do doku
     *
     * @param Request $request->hello
     * @return void
     */
    public function say_hello(Request $request): string
    {
        return ($request->hello === $this->token)
            ? "success"
            : "error";
    }


    public function retun_information_about_stream(Request $request): array
    {
        if ($this->say_hello($request) === "error") {
            return [
                'status' => "error"
            ];
        }
        if (!isset($request->stream_url)) {
            return [
                'status' => "error"
            ];
        }


        $streamUrl = str_replace(":1234", "", $request->stream_url);

        $multicast = Multicast::where('stb_ip', $streamUrl)->first();

        $unicast = UnicastKvalitaChannelOutput::where('output', $request->stream_url)->first();

        if (!$multicast && !$unicast) {
            return [
                'status' => "not found"
            ];
        }

        if (!$multicast) {
            // multicast neexistuje

            // existuje unicast , nutno zjistit H264 || H265
            if (!is_null($unicast->h264Id)) {
                // vyhledání dle H264
                if ($h264 = H264::find($unicast->h264Id)) {
                    // channelId , deviceId
                    $multicast = Multicast::find($h264->channelId);
                    $h264Device = Device::find($h264->deviceId);
                }
            } else {
                // vyhledání dle h265

                if ($h265 = H265::find($unicast->h265Id)) {
                    // channelId , deviceId
                    $multicast = Multicast::find($h265->channelId);
                    $h265Device = Device::find($h265->deviceId);
                }
            }
        }

        if (!$unicast) {

            if ($h264 = H264::where('channelId', $multicast->channelId)->first()) {
                $h264Output = array(
                    'chunk_Store_id' => UnicastChunkStoreId::where('channelId', $multicast->id)->first(),
                    'm3u8_stb' => M3u8::where('h264id', $h264->id)->first()->local,
                    'm3u8_HLS_kdekoliv' => M3u8::where('h264id', $h264->id)->first()->kdekoliv,
                    'm3u8_mobile' => M3u8::where('h264id', $h264->id)->first()->mobile,

                );
                $h264Device = Device::find($h264->deviceId)->name;
                $h264DeviceId = $h264->deviceId;
            } else {
                $h264Output = array();
                $h264Device = null;
                $h264DeviceId = null;
            }

            if ($h265 = H265::where('channelId', $multicast->channelId)->first()) {

                $h265Output = $h265->id;
                $h265Device = Device::find($h265->deviceId)->name;
                $h265DeviceId = $h265->deviceId;
            } else {
                $h265Output = null;
                $h265Device = null;
                $h265DeviceId = null;
            }
        }

        $channel = Channel::find($multicast->channelId);
        $multicastDevice = Device::find($multicast->deviceId);


        return [
            'status' => "success",
            'channelData' => array(
                'id' => $multicast->channelId,
                'nazev' => $channel->nazev,
                'ipKstb' => $multicast->stb_ip
            ),
            'prijem' => array(
                'id' => $multicastDevice->id,
                'name' => $multicastDevice->name
            ),
            'multiplexer' =>  Device::where('id', $request->multiplexerId)->first(),
            'h264' => $h264Output,
            'h264Device' => $h264Device,
            'h264DeviceId' => $h264DeviceId,
            'h265' => $h265Output,
            'h265Device' => $h265Device,
            'h265DeviceId' => $h265DeviceId,
        ];
    }

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


    public static function create_new_transcoder($deviceName, $deviceIp): void
    {
        try {
            if (!Api::where('type', "transcoder_create")->first()) {
                exit();
            }

            $apiData = Api::where('type', "transcoder_create")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                    'name' => $deviceName,
                    'ip' => $deviceIp
                ]
            ]);
        } catch (\Throwable $th) {
            exit();
        }
    }


    public static function get_alerts(): array
    {
        try {
            if (!Api::where('type', "transcoder_alerts")->first()) {
                return ["status" => 'no response'];
            }

            $apiData = Api::where('type', "transcoder_alerts")->first();

            $client = new Client;

            $response = $client->post($apiData->uri, [
                'form_params' => [
                    'hello' => $apiData->token,
                ]
            ]);
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
