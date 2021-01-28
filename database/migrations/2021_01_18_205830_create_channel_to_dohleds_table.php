<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelToDohledsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channel_to_dohleds', function (Blueprint $table) {
            $table->id();
            $table->string('channelId')->index();
            $table->string('H264Id')->index();
            $table->string('H265Id')->index();
            $table->string('dohledId')->index();
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
        Schema::dropIfExists('channel_to_dohleds');
    }
}
