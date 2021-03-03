<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStreamerAndPortBoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('streamer_and_port_bounds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('streamer_id')->constrained();
            $table->foreignId('stream_port_id')->constrained();
            $table->string('used_for')->nullable();
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
        Schema::dropIfExists('streamer_and_port_bounds');
    }
}
