<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\ChannelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('connectionTest', [ApiController::class, 'say_hello']);

Route::get('iptv/alerts', [ApiController::class, 'check_notifications_from_dohled']);

Route::get('channel/return', [ApiController::class, 'return_channels']);

Route::get('/channel/search', [ApiController::class, 'retun_information_about_stream']);


/**
 * API verze 2, postupně bude nahrazeno za původní API
 */
Route::group(['middleware' => 'api_check'], function () {
    Route::group(['prefix' => 'v2'], function () {
        Route::group(['prefix' => 'channel'], function () {
            Route::get('logo', [ChannelController::class, 'get_channel_logo']);
            Route::get('info', [App\Http\Controllers\API\APIv2Controller::class, 'show']);
        });
    });
});
