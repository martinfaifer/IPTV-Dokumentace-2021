<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('connectionTest', [ApiController::class, 'say_hello']);

Route::get('iptv/alerts', [ApiController::class, 'check_notifications_from_dohled']);

Route::get('channel/return', [ApiController::class, 'return_channels']);

Route::get('/channel/search', [ApiController::class, 'retun_information_about_stream']);
