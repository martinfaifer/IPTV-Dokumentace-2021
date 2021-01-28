<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCrashedChannelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crashed_channels', function (Blueprint $table) {
            $table->id();
            $table->string('multicastId')->nullable();
            $table->string('h264')->nullable();
            $table->string('h265')->nullable();

            $table->string('reboot_one')->nullable();
            $table->string('reboot_two')->nullable();
            $table->string('sended_email_alert')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crashed_channels');
    }
}
