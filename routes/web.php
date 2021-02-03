<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlankomInterfaceController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ChannelToDohledController;
use App\Http\Controllers\DeviceCategoryController;
use App\Http\Controllers\DeviceTemplateController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\DeviceInterfaceController;
use App\Http\Controllers\DVBController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FteInterfaceController;
use App\Http\Controllers\H264Controller;
use App\Http\Controllers\H265Controller;
use App\Http\Controllers\IptvPackageController;
use App\Http\Controllers\M3u8Controller;
use App\Http\Controllers\MulticastController;
use App\Http\Controllers\MulticastSourceController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\PowerVuInterfaceController;
use App\Http\Controllers\SatelitCardController;
use App\Http\Controllers\SatelitController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UnicastChunkStoreIdController;
use App\Http\Controllers\UnicastKvalitaChannelOutputController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\WikiController;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use JJG\Ping;

Route::get('/', function () {
    return view('welcome');
});

Route::post('tags', [TagController::class, 'return_tags'])->middleware('auth');
// výpis všech stítku
Route::get('tags', [TagController::class, 'get_tags'])->middleware('auth');
// vytvoirení nového stitku
Route::post('tag/create', [TagController::class, 'create'])->middleware('auth');
// update stitku
Route::post('tag/update', [TagController::class, 'update'])->middleware('auth');
// odebrání stitku
Route::post('tag/remove', [TagController::class, 'delete'])->middleware('auth');
// pridaná tagu ke kanalu / device ...
Route::post('tag/add', [TagController::class, 'add_tag'])->middleware('auth');
// odebrání tagu z kanalu, device ...
Route::post('tag/removeFrom', [TagController::class, 'remove_tag_from'])->middleware('auth');

// searchs => vyhledání v celé aplikaci, pripaveny json s url a popisem pro rychlejší vyhledání
Route::get('search', [SearchController::class, 'search'])->middleware('auth');

// Sekce  kanály
Route::get('channels', [ChannelController::class, 'get_channels'])->middleware('auth');
// Obecná funkce na kontrolu, zda exituje jiz device / parametr na kanálu
Route::post('channel/check', [ChannelController::class, 'check_channel'])->middleware('auth');
// zalozeni noveho kanálu
Route::post('channel/create', [ChannelController::class, 'create'])->middleware('auth');
// získání multicatových informací
Route::post('channel/multicast', [ChannelController::class, 'return_multicast_informations'])->middleware('auth');
// editace multicastu
Route::post('channel/multicast/edit', [MulticastController::class, 'update'])->middleware('auth');
// získání názvu kanálu
Route::post('channel/name', [ChannelController::class, 'get_channel_name'])->middleware('auth');
// získání multicastových infomrací
Route::post('multicast', [MulticastController::class, 'return_multicast_data_for_current_chanel'])->middleware('auth');
// Vyhledání multiplexoru
Route::post('multiplexor', [MulticastController::class, 'return_multiplexer_by_channel'])->middleware('auth');
// Vyhledání zarizení na ktere je napárovan kanal
Route::post('prijem', [MulticastController::class, 'return_device_by_channel'])->middleware('auth');
// Vyhledání zalohy pro prijem který je napárován pro kanál
Route::post('backup', [MulticastController::class, 'return_backup_device_by_channel'])->middleware('auth');
// editace stávajícího kanálu
Route::post('channel', [ChannelController::class, 'this_channel'])->middleware('auth');
// editace multiplexoru na kanálu
Route::post('channel/multiplexer/edit', [ChannelController::class, 'edit_multiplexor'])->middleware('auth');
// editace prijmu kanalu
Route::post('device/prijem/edit', [ChannelController::class, 'edit_prijem'])->middleware('auth');
// editace backup prijmu
Route::post('device/backup/edit', [ChannelController::class, 'edit_backup'])->middleware('auth');
// odebrání zálohy
Route::post('device/backup/remove', [ChannelController::class, 'remove_backup'])->middleware('auth');
// Pdebrání prijmu
Route::post('device/prijem/remove', [ChannelController::class, 'remove_prijem'])->middleware('auth');
// Odebrání multiplexoru od kanálu
Route::post('channel/multiplexer/remove', [ChannelController::class, 'remove_multiplexor'])->middleware('auth');
// zmena názvu kanálu
Route::post('channel/name/edit', [ChannelController::class, 'change_channel_name'])->middleware('auth');
// odebrání kanálu
Route::post('channel/delete', [ChannelController::class, 'delete_channel'])->middleware('auth');
// Vyhledání informací z dohledu
Route::post('channel/dohled', [ChannelController::class, 'return_dohled_data'])->middleware('auth');
Route::post('channel/h264/dohled', [H264Controller::class, 'return_dohled_data'])->middleware('auth');
Route::post('channel/h265/dohled', [H265Controller::class, 'return_dohled_data'])->middleware('auth');

/**
 * Unicast 
 */
// overeni existence
Route::post('h265/check', [H265Controller::class, 'check_if_exist'])->middleware('auth');
Route::post('h264/check', [H264Controller::class, 'check_if_exist'])->middleware('auth');

// zalození H265
Route::post('h265/create', [H265Controller::class, 'create'])->middleware('auth');

// založení H264 outputu
Route::post('h264/create', [H264Controller::class, 'create'])->middleware('auth');
// odebrání h264
Route::post('h264/delete', [H264Controller::class, 'delete_from_web'])->middleware('auth');
//  získání chunk store id dle id kanálu
Route::post('unicast/chunkStoreId', [UnicastChunkStoreIdController::class, 'return_chunkStoreId'])->middleware('auth');
// output pro kvality v h264
Route::post('h264/channel/kvality', [UnicastKvalitaChannelOutputController::class, 'return_output_by_channel'])->middleware('auth');
// kvality pro editaci
Route::post('h264/channel/kvalityForEdit', [UnicastKvalitaChannelOutputController::class, 'return_h264_output_for_edit'])->middleware('auth');
Route::post('h265/channel/kvalityForEdit', [UnicastKvalitaChannelOutputController::class, 'return_h265_output_for_edit'])->middleware('auth');
// output pro získání m38u v h264
Route::post('h264/channel/m3u8', [M3u8Controller::class, 'return_m38u_by_id'])->middleware('auth');
// transcoder
Route::post('h264/transcoder', [H264Controller::class, 'return_transcoder_information'])->middleware('auth');

// vyhledání statusu streamu z transcoderu
Route::post('h264/transcoder/status', [H264Controller::class, 'try_to_get_stream_status'])->middleware('auth');
Route::post('h265/transcoder/status', [H265Controller::class, 'try_to_get_stream_status'])->middleware('auth');

// update transcoderu
Route::post('h264/transcoder/update', [H264Controller::class, 'update_transcoder'])->middleware('auth');
Route::post('h265/transcoder', [H265Controller::class, 'return_transcoder_information'])->middleware('auth');
// update H265 transcoderu / devicu
Route::post('h265/transcoder/update', [H265Controller::class, 'update_transcoder'])->middleware('auth');

// Editace H264
Route::post('h264/channel/edit', [H264Controller::class, 'edit'])->middleware('auth');

// výpis kategrií
Route::get('device/categories', [DeviceCategoryController::class, 'return_device_category'])->middleware('auth');


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
})->middleware('auth');

// Vendori
Route::get('vendors', [VendorController::class, 'return_vendors'])->middleware('auth');
// vyhledání vendora
Route::post('device/vendor', [VendorController::class, 'return_device_vendor'])->middleware('auth');

// Satelity
Route::get('satelits', [SatelitController::class, 'return_satelits'])->middleware('auth');

// DVB
Route::get('dvb', [DVBController::class, 'return_dvb'])->middleware('auth');

// IPTV Balíčky
Route::get('packages', [IptvPackageController::class, 'return_packages'])->middleware('auth');

// Satelitní karty
Route::get('cards', [SatelitCardController::class, 'return_all'])->middleware('auth');
// vyhledání card number dle id
Route::post('card/number', [SatelitCardController::class, 'return_card_number'])->middleware('auth');
// vyhledání zařízení, které má vazbu na kartu
Route::post('card/device', [SatelitCardController::class, 'return_device_with_this_card'])->middleware('auth');

// Zařízení
// výpis všech interfaců. které se dají napátovat na zařízení
Route::get('device/allInterfaces', [DeviceInterfaceController::class, 'return_interfaces'])->middleware('auth');
// vyhledání pouze multiplexorů
Route::get('device/multiplexors', [DeviceController::class, 'return_only_multiplexors'])->middleware('auth');
// výpis piuze transcoderu
Route::get('device/transcoders', [DeviceController::class, 'return_only_transcoders'])->middleware('auth');
// vypsání transcoderů a prijimaců (u H265 je mozne chytat primo ze sat)
Route::get('device/transcodersAndSatelits', [DeviceController::class, 'return_sat_and_transcoders'])->middleware('auth');
// výpis transcoderů a linuxu
Route::get('device/transcodersAndlinux', [DeviceController::class, 'return_transcoders_and_linux'])->middleware('auth');
// výpis pouze satelitních prijímacu, po IP, linuxu
Route::get('device/prijem', [DeviceController::class, 'return_only_prijem'])->middleware('auth');
// odebrání zařízení
Route::post('device/remove', [DeviceController::class, 'delete_device'])->middleware('auth');
// získání portů, na které má zařízení vazbu
Route::post('device/currentInterfaces', [DeviceController::class, 'return_device_interfaces'])->middleware('auth');
// editace zařízení ( zakladní editace, detailní je v karte zarizení)
Route::post('device/baseEdit', [DeviceController::class, 'edit_device'])->middleware('auth');
// výpis zakladních infromací pro jednoduchou editaci
Route::post('device/getInfoForBaseEdit', [DeviceController::class, 'return_data_for_base_edit'])->middleware('auth');
// editace interfaců na zařízení
Route::post('device/interfaces/edit', [DeviceController::class, 'edit_interface'])->middleware('auth');
// odebrání interfaců ze zařízení
Route::post('device/interfaces/delete', [DeviceController::class, 'remove_interfaces'])->middleware('auth');
// výpis vsech zařízení 
Route::get('devices', [DeviceController::class, 'return_devices'])->middleware('auth');
// vytviření nového zařízení
Route::post('device/create', [DeviceController::class, 'device_create'])->middleware('auth');
// vyhledání názvu zařízení
Route::post('device/name', [DeviceController::class, 'return_deviceName'])->middleware('auth');
// obecný výpis informací o zařízení ( veškeré informace až na šablony a interfacy )
Route::post('device/info_sum', [DeviceController::class, 'return_device_info_for_device_without_template'])->middleware('auth');
// vyhledání sablony k zařízení
Route::post('device/template', [DeviceController::class, 'return_device_template_if_exist'])->middleware('auth');
// Zařízení , vyhledání zarizení, která nejsou multiplexor
Route::get('devices/withoutMultiplexor', [DeviceController::class, 'return_devices_without_multiplexor'])->middleware('auth');
// ziskání detailních informací o zarizení
Route::post('device/info', [DeviceController::class, 'device_info'])->middleware('auth');
// kanály s vazbou na zařízení
Route::post('device/channels', [DeviceController::class, 'return_channels_belongsTo_device'])->middleware('auth');
// editace obecných informací o zařízení
Route::post('device/edit', [DeviceController::class, 'device_edit'])->middleware('auth');
// editace interfaců na Blankomech
Route::post('device/blankom/interface', [BlankomInterfaceController::class, 'edit_interface'])->middleware('auth');
// editace interfacu na FTE 
Route::post('device/fte/interface', [FteInterfaceController::class, 'edit_interface'])->middleware('auth');
// editace PowerVu
Route::post('device/powerVu/interface', [PowerVuInterfaceController::class, 'edit_interface'])->middleware('auth');

Route::post('device/transcoderData', [DeviceController::class, 'return_transcoder_usage'])->middleware('auth');

// vyhledání multiplexorů
Route::get('devices/multiplexors', [DeviceController::class, 'return_multiplexors'])->middleware('auth');
// vyhledání zdrojů multicastu
Route::get('sources', [MulticastSourceController::class, 'return_sources'])->middleware('auth');

// Auth
Route::get('logout', [AuthController::class, 'logout'])->middleware('auth');
Route::post('login', [AuthController::class, 'logIn']);
Route::get('login', function () {
    return [
        'status' => "error"
    ];
})->name('login');

// user
Route::get('user', [UserController::class, 'get_user']);
// získání všech userů
Route::get('users', [UserController::class, 'get_users'])->middleware('auth');


// Události
Route::post('event/create', [EventController::class, 'create'])->middleware('auth');
// vyhledání událostí dle channelID
Route::post('event/channel', [EventController::class, 'search_events_by_channelId'])->middleware('auth');
// vapsání událostí v dnesní den
Route::get('events/today', [EventController::class, 'return_today_event'])->middleware('auth');
// odebrání události
Route::post('event/delete', [EventController::class, 'delete'])->middleware('auth');


// vyhledání poznámek
Route::post('notes', [NoteController::class, 'return_notes'])->middleware('auth');
// smazaní poznamky
Route::post('note/delete', [NoteController::class, 'delete'])->middleware('auth');
// create
Route::post('note/create', [NoteController::class, 'create'])->middleware('auth');

// endpoint to external system
Route::get('external_endpoints', [ApiController::class, 'return_endpoints'])->middleware('auth');

// WIKI
Route::get('wiki', [WikiController::class, 'get']);


Route::get('ping', function () {

    $uriArr = (explode('/', "http://93.91.154.55/api/streamAlerts"));
    $ping = new Ping($uriArr[2], "128", "1");
    $latency = $ping->ping();

    if ($latency !== false) {
        return "PING";
    } else {
        return "NOPING";
    }
});
