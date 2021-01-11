<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('category');
            $table->foreignId('vendor');
            $table->string('ip')->nullable();
            $table->string('login_user')->nullable();
            $table->string('login_password')->nullable();
            $table->string('status')->nullable();
            $table->longText('sablona')->nullable();
            $table->longText('haveInterface')->nullable();
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
        Schema::dropIfExists('devices');
    }
}
