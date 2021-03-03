<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSamsungAndAndroidColumnsToM3u8sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('m3u8s', function (Blueprint $table) {
            $table->string('sumsung_tv')->nullable();
            $table->string('android_tv')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('m3u8s', function (Blueprint $table) {
            //
        });
    }
}
