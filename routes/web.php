<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlankomInterfaceController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\DeviceCategoryController;
use App\Http\Controllers\DeviceTemplateController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\DeviceInterfaceController;
use App\Http\Controllers\DVBController;
use App\Http\Controllers\FteInterfaceController;
use App\Http\Controllers\H264Controller;
use App\Http\Controllers\H265Controller;
use App\Http\Controllers\IptvPackageController;
use App\Http\Controllers\M3u8Controller;
use App\Http\Controllers\MulticastController;
use App\Http\Controllers\MulticastSourceController;
use App\Http\Controllers\PowerVuInterfaceController;
use App\Http\Controllers\SatelitController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\UnicastChunkStoreIdController;
use App\Http\Controllers\UnicastKvalitaChannelOutputController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// searchs => vyhledání v celé aplikaci, pripaveny json s url a popisem pro rychlejší vyhledání
Route::get('search', [SearchController::class, 'search']);

// Sekce  kanály
Route::get('channels', [ChannelController::class, 'get_channels']);
// Obecná funkce na kontrolu, zda exituje jiz device / parametr na kanálu
Route::post('channel/check', [ChannelController::class, 'check_channel']);
// zalozeni noveho kanálu
Route::post('channel/create', [ChannelController::class, 'create']);
// získání multicatových informací
Route::post('channel/multicast', [ChannelController::class, 'return_multicast_informations']);
// editace multicastu
Route::post('channel/multicast/edit', [MulticastController::class, 'update']);
// získání názvu kanálu
Route::post('channel/name', [ChannelController::class, 'get_channel_name']);
// získání multicastových infomrací
Route::post('multicast', [MulticastController::class, 'return_multicast_data_for_current_chanel']);
// Vyhledání multiplexoru
Route::post('multiplexor', [MulticastController::class, 'return_multiplexer_by_channel']);
// Vyhledání zarizení na ktere je napárovan kanal
Route::post('prijem', [MulticastController::class, 'return_device_by_channel']);
// Vyhledání zalohy pro prijem který je napárován pro kanál
Route::post('backup', [MulticastController::class, 'return_backup_device_by_channel']);
// editace stávajícího kanálu
Route::post('channel', [ChannelController::class, 'this_channel']);
// editace multiplexoru na kanálu
Route::post('channel/multiplexer/edit', [ChannelController::class, 'edit_multiplexor']);
// editace prijmu kanalu
Route::post('device/prijem/edit', [ChannelController::class, 'edit_prijem']);
// editace backup prijmu
Route::post('device/backup/edit', [ChannelController::class, 'edit_backup']);
// odebrání zálohy
Route::post('device/backup/remove', [ChannelController::class, 'remove_backup']);
// Pdebrání prijmu
Route::post('device/prijem/remove', [ChannelController::class, 'remove_prijem']);
// Odebrání multiplexoru od kanálu
Route::post('channel/multiplexer/remove', [ChannelController::class, 'remove_multiplexor']);
// zmena názvu kanálu
Route::post('channel/name/edit', [ChannelController::class, 'change_channel_name']);
// odebrání kanálu
Route::post('channel/delete', [ChannelController::class, 'delete_channel']);

/**
 * Unicast 
 */
// overeni existence
Route::post('h265/check', [H265Controller::class, 'check_if_exist']);
Route::post('h264/check', [H264Controller::class, 'check_if_exist']);

// založení H264 outputu
Route::post('h264/create', [H264Controller::class, 'create']);
//  získání chunk store id dle id kanálu
Route::post('unicast/chunkStoreId', [UnicastChunkStoreIdController::class, 'return_chunkStoreId']);
// editace chaunk store id
Route::post('unicast/chunkStoreId/edit', [UnicastChunkStoreIdController::class, 'edit']);
// output pro kvality v h264
Route::post('h264/channel/kvality', [UnicastKvalitaChannelOutputController::class, 'return_output_by_channel']);
// output pro získání m38u v h264
Route::post('h264/channel/m3u8', [M3u8Controller::class, 'return_m38u_by_id']);
// transcoder
Route::post('h264/transcoder', [H264Controller::class, 'return_transcoder_information']);
Route::post('h265/transcoder', [H265Controller::class, 'return_transcoder_information']);

// výpis kategrií
Route::get('device/categories', [DeviceCategoryController::class, 'return_device_category']);


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
// vyhledání vendora
Route::post('device/vendor', [VendorController::class, 'return_device_vendor']);

// Satelity
Route::get('satelits', [SatelitController::class, 'return_satelits']);

// DVB
Route::get('dvb', [DVBController::class, 'return_dvb']);

// IPTV Balíčky
Route::get('packages', [IptvPackageController::class, 'return_packages']);


// Zařízení
// výpis všech interfaců. které se dají napátovat na zařízení
Route::get('device/allInterfaces', [DeviceInterfaceController::class, 'return_interfaces']);
// vyhledání pouze multiplexorů
Route::get('device/multiplexors', [DeviceController::class, 'return_only_multiplexors']);
// výpis piuze transcoderu
Route::get('device/transcoders', [DeviceController::class, 'return_only_transcoders']);
// výpis pouze satelitních prijímacu, po IP, linuxu
Route::get('device/prijem', [DeviceController::class, 'return_only_prijem']);
// odebrání zařízení
Route::post('device/remove', [DeviceController::class, 'delete_device']);
// získání portů, na které má zařízení vazbu
Route::post('device/currentInterfaces', [DeviceController::class, 'return_device_interfaces']);
// editace zařízení ( zakladní editace, detailní je v karte zarizení)
Route::post('device/baseEdit', [DeviceController::class, 'edit_device']);
// výpis zakladních infromací pro jednoduchou editaci
Route::post('device/getInfoForBaseEdit', [DeviceController::class, 'return_data_for_base_edit']);
// editace interfaců na zařízení
Route::post('device/interfaces/edit', [DeviceController::class, 'edit_interface']);
// odebrání interfaců ze zařízení
Route::post('device/interfaces/delete', [DeviceController::class, 'remove_interfaces']);
// výpis vsech zařízení 
Route::get('devices', [DeviceController::class, 'return_devices']);
// vytviření nového zařízení
Route::post('device/create', [DeviceController::class, 'device_create']);
// vyhledání názvu zařízení
Route::post('device/name', [DeviceController::class, 'return_deviceName']);
// obecný výpis informací o zařízení ( veškeré informace až na šablony a interfacy )
Route::post('device/info_sum', [DeviceController::class, 'return_device_info_for_device_without_template']);
// vyhledání sablony k zařízení
Route::post('device/template', [DeviceController::class, 'return_device_template_if_exist']);
// Zařízení , vyhledání zarizení, která nejsou multiplexor
Route::get('devices/withoutMultiplexor', [DeviceController::class, 'return_devices_without_multiplexor']);
// ziskání detailních informací o zarizení
Route::post('device/info', [DeviceController::class, 'device_info']);
// kanály s vazbou na zařízení
Route::post('device/channels', [DeviceController::class, 'return_channels_belongsTo_device']);
// editace obecných informací o zařízení
Route::post('device/edit', [DeviceController::class, 'device_edit']);
// editace interfaců na Blankomech
Route::post('device/blankom/interface', [BlankomInterfaceController::class, 'edit_interface']);
// editace interfacu na FTE 
Route::post('device/fte/interface', [FteInterfaceController::class, 'edit_interface']);
// editace PowerVu
Route::post('device/powerVu/interface', [PowerVuInterfaceController::class, 'edit_interface']);

// vyhledání multiplexorů
Route::get('devices/multiplexors', [DeviceController::class, 'return_multiplexors']);
// vyhledání zdrojů multicastu
Route::get('sources', [MulticastSourceController::class, 'return_sources']);

// Auth
Route::get('logout', [AuthController::class, 'logout']);
Route::post('login', [AuthController::class, 'logIn']);

// user
Route::get('user', [UserController::class, 'get_user']);



// test
