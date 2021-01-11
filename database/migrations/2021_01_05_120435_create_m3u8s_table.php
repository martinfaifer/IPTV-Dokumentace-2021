<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateM3u8sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m3u8s', function (Blueprint $table) {
            $table->id();
            $table->string('h264id')->nullable();
            $table->string('h265id')->nullable();
            $table->text('kdekoliv');
            $table->text('local');
            $table->text('mobile');
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
        Schema::dropIfExists('m3u8s');
    }
}
