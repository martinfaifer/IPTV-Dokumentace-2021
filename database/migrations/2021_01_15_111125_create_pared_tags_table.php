<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParedTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pared_tags', function (Blueprint $table) {
            $table->id();
            $table->string('deviceId')->index()->nullable();
            $table->string('multicastId')->index()->nullable();
            $table->string('h264Id')->index()->nullable();
            $table->string('h265Id')->index()->nullable();
            $table->string('tagId')->index();
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
        Schema::dropIfExists('pared_tags');
    }
}
