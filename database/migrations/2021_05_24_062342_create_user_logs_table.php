<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_logs', function (Blueprint $table) {
            $table->id();
            $table->string('email')->index();
            $table->string('multicastId')->nullable()->index();
            $table->string('h264Id')->nullable()->index();
            $table->string('h265Id')->nullable()->index();
            $table->string('deviceId')->nullable()->index();
            $table->string('original')->nullable();
            $table->string('new')->nullable();
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
        Schema::dropIfExists('user_logs');
    }
}
