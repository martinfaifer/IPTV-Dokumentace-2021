<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnicastOutputForDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unicast_output_for_devices', function (Blueprint $table) {
            $table->id();
            $table->string('h264Id')->nullable();
            $table->string('h265Id')->nullable();
            $table->longText('output');
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
        Schema::dropIfExists('unicast_output_for_devices');
    }
}
