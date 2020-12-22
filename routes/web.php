<?php

use App\Http\Controllers\ChannelController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// Sekce  kanály
Route::get('channels', [ChannelController::class, 'get_channels']);
// získání názvu kanálu
Route::post('channel/name', [ChannelController::class, 'get_channel_name']);
