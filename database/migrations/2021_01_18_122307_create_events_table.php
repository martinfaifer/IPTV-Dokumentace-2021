<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('start_day')->index();
            $table->string('start_time')->index();
            $table->string('end_day')->index();
            $table->string('end_time')->index();
            $table->string('repeat_every_day')->index();
            $table->string('multicastId')->index();
            $table->string('h264Id')->index();
            $table->string('h265Id')->index();
            $table->text('note');
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
        Schema::dropIfExists('events');
    }
}
