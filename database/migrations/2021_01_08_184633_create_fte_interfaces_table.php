<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFteInterfacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fte_interfaces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deviceId')->index();
            $table->string('dvb')->nullable();
            $table->string('sat')->nullable();
            $table->string('freq')->nullable();
            $table->string('symbolRate')->nullable();
            $table->string('polarizace')->nullable();
            $table->string('fec')->nullable();
            $table->text('CIA')->nullable();
            $table->text('CIB')->nullable();
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
        Schema::dropIfExists('fte_interfaces');
    }
}
