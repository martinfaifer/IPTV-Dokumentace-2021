<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Console\Events\CommandFinished;
use Illuminate\Support\Facades\Event;
use NunoMaduro\LaravelDesktopNotifier\Notification;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        // Event::listen(CommandFinished::class, function (CommandFinished $event) {
        //     if ($event->command === 'test') {
        //         $passed = !$event->exitCode;
        //         $this->notify($passed);
        //     }
        // });
    }

    public function notify($testData)
    {
        // $notification = (new Notification())
        //     ->setTitle(config('app.name') . ' IPTV DOKU')
        //     ->setBody(
        //         $testData ?
        //             'All tests passed!' :
        //             'One or more tests failed!'
        //     )
        //     ->addOption( // ignore this part if you don't use a Mac
        //         'sound',
        //         $testData ?
        //             'glass' :
        //             'basso'
        //     );

        // $this->app->make('desktop.notifier')->send($notification);
    }
}
