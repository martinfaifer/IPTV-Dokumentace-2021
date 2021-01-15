<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMulticastsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('multicasts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('channelId')->index();
            $table->string('stb_ip')->nullable()->index();
            $table->string('multicast_ip')->index();
            $table->foreignId('zdrojId')->index();
            $table->string('isBackup')->nullable();
            $table->string('multiplexerId')->nullable();
            $table->string('deviceId')->nullable();
            $table->string('deviceInterface')->nullable();
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
        Schema::dropIfExists('multicasts');
    }
}
