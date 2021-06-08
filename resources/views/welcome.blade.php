<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="icon/favicon.ico" type="image/x-icon">
        <title>{{ config('app.name') }}</title>
        <script>
            window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};


        </script>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/animation.css') }}" rel="stylesheet">
        <style> *{ text-transform: none !important; } </style>
    </head>

    <body>
        {{-- registrace vuejs --}}
        <v-app id="app" style="background-color: #F1F5F9">
            <router-view></router-view>
        </v-app>
    </body>
</html>
