<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlankomInterfacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blankom_interfaces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deviceId')->index();
            $table->string('rf1_sat')->nullable();
            $table->string('rf1_lnb')->nullable();
            $table->string('rf1_symbolRate')->nullable();
            $table->string('rf1_dvb')->nullable();
            $table->string('rf1_lnb22k')->nullable();
            $table->string('rf1_fec')->nullable();
            $table->string('rf1_freq')->nullable();
            $table->string('rf1_pol')->nullable();
            $table->text('CI1')->nullable();

            $table->string('rf2_sat')->nullable();
            $table->string('rf2_lnb')->nullable();
            $table->string('rf2_symbolRate')->nullable();
            $table->string('rf2_dvb')->nullable();
            $table->string('rf2_lnb22k')->nullable();
            $table->string('rf2_fec')->nullable();
            $table->string('rf2_freq')->nullable();
            $table->string('rf2_pol')->nullable();
            $table->text('CI2')->nullable();

            $table->string('rf3_sat')->nullable();
            $table->string('rf3_lnb')->nullable();
            $table->string('rf3_symbolRate')->nullable();
            $table->string('rf3_dvb')->nullable();
            $table->string('rf3_lnb22k')->nullable();
            $table->string('rf3_fec')->nullable();
            $table->string('rf3_freq')->nullable();
            $table->string('rf3_pol')->nullable();
            $table->text('CI3')->nullable();

            $table->string('rf4_sat')->nullable();
            $table->string('rf4_lnb')->nullable();
            $table->string('rf4_symbolRate')->nullable();
            $table->string('rf4_dvb')->nullable();
            $table->string('rf4_lnb22k')->nullable();
            $table->string('rf4_fec')->nullable();
            $table->string('rf4_freq')->nullable();
            $table->string('rf4_pol')->nullable();
            $table->text('CI4')->nullable();

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
        Schema::dropIfExists('blankom_interfaces');
    }
}
