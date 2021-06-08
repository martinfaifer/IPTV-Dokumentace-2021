<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToStreamerAndPortBoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('streamer_and_port_bounds', function (Blueprint $table) {
            $table->string('ctypes_mobile')->nullable();
            $table->string('ctypes_stb')->nullable();
            $table->string('ctypes_stb_h265')->nullable();
            $table->string('ctypes_screenshoter')->nullable();
            $table->string('ctypes_samsung_tv')->nullable();
            $table->string('ctypes_android_tv')->nullable();
            $table->string('ctypes_pc')->nullable();
            $table->string('ottstring')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('streamer_and_port_bounds', function (Blueprint $table) {
            //
        });
    }
}
