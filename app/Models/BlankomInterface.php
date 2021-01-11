<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlankomInterface extends Model
{
    use HasFactory;


    protected $fillable = [
        'deviceId',

        'rf1_sat',
        'rf1_lnb',
        'rf1_symbolRate',
        'rf1_dvb',
        'rf1_lnb22k',
        'rf1_fec',
        'rf1_freq',
        'rf1_pol',
        'CI1',

        'rf2_sat',
        'rf2_lnb',
        'rf2_symbolRate',
        'rf2_dvb',
        'rf2_lnb22k',
        'rf2_fec',
        'rf2_freq',
        'rf2_pol',
        'CI2',

        'rf3_sat',
        'rf3_lnb',
        'rf3_symbolRate',
        'rf3_dvb',
        'rf3_lnb22k',
        'rf3_fec',
        'rf3_freq',
        'rf3_pol',
        'CI3',

        'rf4_sat',
        'rf4_lnb',
        'rf4_symbolRate',
        'rf4_dvb',
        'rf4_lnb22k',
        'rf4_fec',
        'rf4_freq',
        'rf4_pol',
        'CI4'
    ];
}
