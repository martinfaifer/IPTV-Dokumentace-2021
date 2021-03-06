<?php

use Illuminate\Support\Str;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlankomInterfaceController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ChannelsToTranscoderController;
use App\Http\Controllers\ChannelToDohledController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CtypeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeviceCategoryController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\DeviceInterfaceController;
use App\Http\Controllers\DVBController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\FteInterfaceController;
use App\Http\Controllers\H264Controller;
use App\Http\Controllers\H265Controller;
use App\Http\Controllers\IconController;
use App\Http\Controllers\IptvPackageController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\MulticastController;
use App\Http\Controllers\MulticastSourceController;
use App\Http\Controllers\NanguChannelController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\PowerVuInterfaceController;
use App\Http\Controllers\SatelitCardController;
use App\Http\Controllers\SatelitController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\StreamerAndPortBoundController;
use App\Http\Controllers\StreamerController;
use App\Http\Controllers\StreamPortController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UnicastChunkStoreIdController;
use App\Http\Controllers\UnicastKvalitaChannelOutputController;
use App\Http\Controllers\UnicastOutputForDeviceController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\WikiController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});
Route::get('/user', [UserController::class, 'get_user']);
Route::post('login', [AuthController::class, 'logIn']);
Route::get('login', function () {
    return [
        'status' => "error"
    ];
})->name('login');

Route::group(['middleware' => 'auth'], function () {

    Route::group(['prefix' => 'tags'], function () {
        Route::post('/', [TagController::class, 'return_tags']);
        Route::get('/', [TagController::class, 'get_tags']);
        Route::get('/noSystem', [TagController::class, 'return_only_no_system_tags']);
    });


    Route::group(['prefix' => 'tag'], function () {
        Route::post('/create', [TagController::class, 'create']);
        Route::patch('/update', [TagController::class, 'update']);
        Route::delete('/remove', [TagController::class, 'delete']);
        Route::post('/add', [TagController::class, 'add_tag']);
        Route::delete('/removeFrom', [TagController::class, 'remove_tag_from']);
    });

    // searchs => vyhledání v celé aplikaci, pripaveny json s url a popisem pro rychlejší vyhledání
    Route::prefix('search')->group(function () {
        Route::get('/', [SearchController::class, 'search']);
        Route::post('/', [SearchController::class, 'realtime_search']);
        Route::get('/filter/{filter}/{item}', [SearchController::class, 'filter']);
        Route::get('/filter/{filter}', function () {
            return [];
        });
        Route::post('/filterData', [SearchController::class, 'filterData']);
    });

    // Sekce  kanály
    Route::get('channels', [ChannelController::class, 'get_channels']);

    Route::group(['prefix' => 'channel'], function () {
        Route::post('/', [ChannelController::class, 'this_channel']);
        Route::post('/logo/save', [ChannelController::class, 'store_logo']);
        Route::post('/check', [ChannelController::class, 'check_channel']);
        Route::post('/create', [ChannelController::class, 'create']);
        Route::post('/name', [ChannelController::class, 'get_channel_name']);
        Route::post('/logo', [ChannelController::class, 'get_channel_logo']);
        Route::patch('/name/edit', [ChannelController::class, 'change_channel_name']);
        Route::delete('/delete', [ChannelController::class, 'delete_channel']);
        Route::post('/dohled', [ChannelController::class, 'return_dohled_data']);
        Route::post('/h264/dohled', [H264Controller::class, 'return_dohled_data']);
        Route::post('/h265/dohled', [H265Controller::class, 'return_dohled_data']);
        Route::post('nangu', [NanguChannelController::class, 'show']);
        Route::post('nangu/show_channel_code', [NanguChannelController::class, 'show_channel_code']);
        Route::post('nangu/update', [NanguChannelController::class, 'update']);
        Route::post('nangu/sources', [NanguChannelController::class, 'show_sources']);
        Route::post('/multicast', [ChannelController::class, 'return_multicast_informations']);
        Route::get('/multicast/history/{channelId}', [LogController::class, 'show_multicast_history']);
        Route::patch('/multicast/edit', [MulticastController::class, 'update']);
        Route::patch('/multiplexer/edit', [ChannelController::class, 'edit_multiplexor']);
        Route::delete('/multiplexer/remove', [ChannelController::class, 'remove_multiplexor']);
        Route::post('/analyze', [ChannelController::class, 'channel_analyze']);
        Route::get('/channels/rebooted', [ChannelController::class, 'get_rebooted_channels']);
        Route::group(['prefix' => 'chunkStoreId'], function () {
            Route::post('/show', [UnicastChunkStoreIdController::class, 'return_chunkStoreId']);
            Route::post('/update', [UnicastChunkStoreIdController::class, 'edit']);
            Route::post('/create', [UnicastChunkStoreIdController::class, 'create']);
        });
    });

    Route::post('dohled/createOrDelete', [ChannelToDohledController::class, 'createOrDelete']);

    // získání multicastových infomrací
    Route::post('multicast', [MulticastController::class, 'return_multicast_data_for_current_chanel']);
    // Vyhledání multiplexoru
    Route::post('multiplexor', [MulticastController::class, 'return_multiplexer_by_channel']);
    // Vyhledání zarizení na ktere je napárovan kanal
    Route::post('prijem', [MulticastController::class, 'return_device_by_channel']);
    // Vyhledání zalohy pro prijem který je napárován pro kanál
    Route::post('backup', [MulticastController::class, 'return_backup_device_by_channel']);
    // editace stávajícího kanálu

    Route::group(['prefix' => 'device'], function () {
        Route::get('/byCytagories', [DeviceController::class, 'return_devices_by_categories']);
        Route::patch('/prijem/edit', [ChannelController::class, 'edit_prijem']);
        Route::delete('/prijem/remove', [ChannelController::class, 'remove_prijem']);
        Route::patch('/backup/edit', [ChannelController::class, 'edit_backup']);
        Route::delete('/backup/remove', [ChannelController::class, 'remove_backup']);
        Route::get('/categories', [DeviceCategoryController::class, 'return_device_category']);
        Route::post('/vendor', [VendorController::class, 'return_device_vendor']);
        Route::get('/allInterfaces', [DeviceInterfaceController::class, 'return_interfaces']);
        Route::get('/multiplexors', [DeviceController::class, 'return_only_multiplexors']);
        Route::get('/transcoders', [DeviceController::class, 'return_only_transcoders']);
        Route::get('/transcodersAndSatelits', [DeviceController::class, 'return_sat_and_transcoders']);
        Route::get('/transcodersAndlinux', [DeviceController::class, 'return_transcoders_and_linux']);
        Route::get('/prijem', [DeviceController::class, 'return_only_prijem']);
        Route::post('/remove', [DeviceController::class, 'delete_device']);
        Route::post('/currentInterfaces', [DeviceController::class, 'return_device_interfaces']);
        Route::post('/baseEdit', [DeviceController::class, 'edit_device']);
        Route::post('/getInfoForBaseEdit', [DeviceController::class, 'return_data_for_base_edit']);
        Route::post('/interfaces/edit', [DeviceController::class, 'edit_interface']);
        Route::post('/interfaces/delete', [DeviceController::class, 'remove_interfaces']);
        Route::post('/create', [DeviceController::class, 'device_create']);
        Route::post('/name', [DeviceController::class, 'return_deviceName']);
        Route::post('/info_sum', [DeviceController::class, 'return_device_info_for_device_without_template']);
        Route::post('/template', [DeviceController::class, 'return_device_template_if_exist']);
        Route::post('/info', [DeviceController::class, 'device_info']);
        Route::post('/channels', [DeviceController::class, 'return_channels_belongsTo_device']);
        Route::post('/edit', [DeviceController::class, 'device_edit']);
        Route::post('/blankom/interface', [BlankomInterfaceController::class, 'edit_interface']);
        Route::post('/fte/interface', [FteInterfaceController::class, 'edit_interface']);
        Route::post('/powerVu/interface', [PowerVuInterfaceController::class, 'edit_interface']);
        Route::post('/transcoderData', [DeviceController::class, 'return_transcoder_usage']);
    });

    Route::group(['prefix' => 'devices'], function () {
        Route::get('/', [DeviceController::class, 'return_devices']);
        Route::get('/withoutMultiplexor', [DeviceController::class, 'return_devices_without_multiplexor']);
        Route::get('/multiplexors', [DeviceController::class, 'return_multiplexors']);
    });

    Route::group(['prefix' => 'h265'], function () {

        Route::post('/check', [H265Controller::class, 'check_if_exist']);
        Route::post('/create', [H265Controller::class, 'create']);
        Route::post('/delete', [H265Controller::class, 'delete_from_web']);

        Route::group(['prefix' => 'transcoder'], function () {
            Route::post('/', [H265Controller::class, 'return_transcoder_information']);
            Route::post('/status', [H265Controller::class, 'try_to_get_stream_status']);
            Route::patch('/update', [H265Controller::class, 'update_transcoder']);
            Route::post('/manageStream', [H265Controller::class, 'manage_stream']);
        });
        Route::group(['prefix' => 'channel'], function () {
            Route::post('/kvalityForEdit', [UnicastKvalitaChannelOutputController::class, 'return_h265_output_for_edit']);
            Route::post('/kvality/update', [H265Controller::class, 'edit']);
            Route::post('/m3u8', [UnicastOutputForDeviceController::class, 'show']);
        });
    });

    Route::group(['prefix' => 'h264'], function () {
        Route::post('/check', [H264Controller::class, 'check_if_exist']);
        Route::post('/create', [H264Controller::class, 'create']);
        Route::post('/delete', [H264Controller::class, 'delete_from_web']);

        Route::group(['prefix' => 'channel'], function () {
            Route::post('/edit', [H264Controller::class, 'edit']);
            Route::post('/kvality', [UnicastKvalitaChannelOutputController::class, 'return_output_by_channel']);
            Route::post('/kvalityForEdit', [UnicastKvalitaChannelOutputController::class, 'return_h264_output_for_edit']);
            // Route::post('/m3u8', [M3u8Controller::class, 'return_m38u_by_id']);
            Route::post('/m3u8', [UnicastOutputForDeviceController::class, 'show']);
        });

        Route::group(['prefix' => 'transcoder'], function () {
            Route::post('/', [H264Controller::class, 'return_transcoder_information']);
            Route::post('/status', [H264Controller::class, 'try_to_get_stream_status']);
            Route::patch('/update', [H264Controller::class, 'update_transcoder']);
            Route::post('/chart', [ChannelsToTranscoderController::class, 'get_stream_history_from_transcoder_controller']);
        });
    });



    // polarizace 
    Route::get('polarizace', function () {
        return [
            array(
                'polarizace' => "vertikální"
            ),
            array(
                'polarizace' => "horizontální"
            )
        ];
    });

    // Vendori
    Route::get('vendors', [VendorController::class, 'return_vendors']);


    // Satelity
    Route::get('satelits', [SatelitController::class, 'return_satelits']);

    // DVB
    Route::get('dvb', [DVBController::class, 'return_dvb']);

    // IPTV Balíčky
    Route::get('packages', [IptvPackageController::class, 'return_packages']);

    // Satelitní karty
    Route::get('cards', [SatelitCardController::class, 'return_all']);
    Route::group(['prefix' => 'card'], function () {
        Route::post('/number', [SatelitCardController::class, 'return_card_number']);
        Route::post('/device', [SatelitCardController::class, 'return_device_with_this_card']);
        Route::post('/create', [SatelitCardController::class, 'create']);
        Route::delete('/remove', [SatelitCardController::class, 'remove']);
    });

    // vyhledání zdrojů multicastu
    Route::get('sources', [MulticastSourceController::class, 'return_sources']);

    Route::group(['prefix' => 'source'], function () {
        Route::post('/create', [MulticastSourceController::class, 'create']);
        Route::patch('/update', [MulticastSourceController::class, 'update']);
        Route::delete('/delete', [MulticastSourceController::class, 'delete']);
    });

    // Auth
    Route::get('logout', [AuthController::class, 'logout']);


    // získání všech userů
    Route::get('users', [UserController::class, 'get_users']);
    Route::group(['prefix' => 'user'], function () {
        Route::post('/create', [UserController::class, 'create']);
        Route::patch('/edit', [UserController::class, 'update']);
        Route::delete('/delete', [UserController::class, 'delete']);
    });

    Route::group(['prefix' => 'user'], function () {
        Route::get('/sessions', [UserController::class, 'sessions']);
        Route::patch('/changePassword', [UserController::class, 'change_password']);
        Route::post('photo', [UserController::class, 'store_photo']);
        Route::get('photo', [UserController::class, 'show_foto']);
        Route::delete('photo', [UserController::class, 'delete_photo']);
    });


    // vapsání událostí v dnesní den
    Route::get('events/today', [EventController::class, 'return_today_event']);
    Route::group(['prefix' => 'event'], function () {
        Route::post('/create', [EventController::class, 'create']);
        Route::post('/update', [EventController::class, 'update']);
        Route::post('/channel', [EventController::class, 'search_events_by_channelId']);
        Route::delete('/delete', [EventController::class, 'delete']);
        Route::get('/', [EventController::class, 'index']);
        Route::get('notify', [EventController::class, 'notify']);
    });


    // poznámky
    Route::post('notes', [NoteController::class, 'return_notes']);
    Route::group(['prefix' => 'note'], function () {
        Route::delete('/delete', [NoteController::class, 'delete']);
        Route::post('/create', [NoteController::class, 'create']);
    });

    // endpoint to external system
    Route::get('external_endpoints', [ApiController::class, 'return_endpoints']);

    // wiki
    Route::group(['prefix' => 'wiki'], function () {
        Route::get('/', [WikiController::class, 'index']);
        Route::post('', [WikiController::class, 'show_category']);
        Route::post('create', [WikiController::class, 'create_category']);
        Route::post('update', [WikiController::class, 'update_category']);
        Route::post('delete', [WikiController::class, 'delete_category']);

        Route::group(['prefix' => 'topic'], function () {
            Route::post('', [WikiController::class, 'show_topic']);
            Route::post('update', [WikiController::class, 'update_topic']);
            Route::post('create', [WikiController::class, 'create_topic']);
            Route::post('delete', [WikiController::class, 'delete_topic']);
        });
    });

    Route::group(['prefix' => 'storage'], function () {
        Route::get('/{contentType}', [FolderController::class, 'scan_folder']);
        Route::delete('/delete', [FolderController::class, 'delete']);
        Route::post('/add', [FolderController::class, 'add_file']);
        Route::post('files', [FolderController::class, 'return_files_belongsTo_channel']);
    });

    Route::group(['prefix' => 'contact'], function () {
        Route::post('/store', [ContactController::class, 'store']);
        Route::get('/channel/{channelId}', [ContactController::class, 'show']);
        Route::get('/card/{cardId}', [ContactController::class, 'show']);
        Route::patch('/', [ContactController::class, 'update']);
        Route::delete('/', [ContactController::class, 'destroy']);
    });

    Route::group(['prefix' => 'streamer'], function () {
        Route::get('streamers', [StreamerController::class, "index"]);
        Route::get('/streamer/{streamerId}', [StreamerController::class, 'show']);
        Route::get('ports', [StreamerAndPortBoundController::class, "index"]);
        Route::post('port', [StreamerAndPortBoundController::class, 'store']);
        Route::delete('port', [StreamerAndPortBoundController::class, 'destroy']);
        Route::post('create', [StreamerController::class, 'create']);
        Route::delete('/', [StreamerController::class, 'destroy']);
    });

    Route::group(['prefix' => 'stream'], function () {
        Route::get('ports', [StreamPortController::class, "index"]);
        Route::group(['prefix' => 'port'], function () {
            Route::delete('/', [StreamPortController::class, "destroy"]);
            Route::post('/', [StreamPortController::class, "create"]);
            Route::get('{portId}', [StreamPortController::class, "show"]);
            Route::post('generate', [UnicastOutputForDeviceController::class, 'run_command']);
        });
    });

    Route::prefix('ctype')->group(function () {
        Route::get('', [CtypeController::class, 'index']);
        Route::get('{ctypeId}', [CtypeController::class, 'show']);
        Route::delete('', [CtypeController::class, 'destroy']);
        Route::post('', [CtypeController::class, 'create']);
    });

    Route::get('icons', [IconController::class, 'index']);
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::post('nangu', [NanguChannelController::class, 'show']);
});
