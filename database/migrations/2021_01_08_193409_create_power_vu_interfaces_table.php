<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePowerVuInterfacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('power_vu_interfaces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deviceId')->index();
            $table->string('dvb')->nullable();
            $table->string('sat')->nullable();
            $table->string('freq')->nullable();
            $table->string('fec')->nullable();
            $table->string('symbolRate')->nullable();
            $table->string('pol')->nullable();
            $table->string('ASI')->nullable();
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
        Schema::dropIfExists('power_vu_interfaces');
    }
}
