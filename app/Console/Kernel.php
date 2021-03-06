<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('dohled:getStatuses_andTryToReboot')->runInBackground()->everyMinute(); // získání statusů streamů z dohledu, včetně uatomatického pokusu o restart
        // $schedule->command('events:delete')->dailyAt('01:00')->runInBackground();
        $schedule->command('channel:autoReboot')->dailyAt('04:00')->runInBackground(); // automatický restart specifických kanálů na transcoderech tyku q0x

        $schedule->command('dohled:try_find')->hourly()->runInBackground();

        $schedule->command('transcoder:fillStreamId')->hourly()->runInBackground(); // vyhledávání vazeb na transcoderech
        // $schedule->command('channels:fillIdFromDohled')->daily()->runInBackground(); // vyhledávání vazeb kanálů na dohledu
        $schedule->command('tag:add_dohled_tag')->hourly()->runInBackground();

        // $schedule->command('unicast:findTranscoderAndCheckBound')->runInBackground()->hourly(); // kontrola vazeb
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
