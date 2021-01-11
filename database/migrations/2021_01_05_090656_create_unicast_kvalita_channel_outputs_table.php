<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnicastKvalitaChannelOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unicast_kvalita_channel_outputs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kvalitaId')->index();
            $table->string('h264Id')->nullable();
            $table->string('h265Id')->nullable();
            $table->text('output')->nullable();
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
        Schema::dropIfExists('unicast_kvalita_channel_outputs');
    }
}
