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
            $table->string('channelId')->nullable()->index();
            $table->string('H264Id')->nullable()->index();
            $table->string('H265Id')->index()->nullable();
            $table->string('dohledId')->index()->nullable();
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
