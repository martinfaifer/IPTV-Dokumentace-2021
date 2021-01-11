<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnicastKvalitaChannelOutput extends Model
{
    use HasFactory;
    protected $fillable = [
        'kvalitaId',
        'h264Id',
        'h265Id',
        'output'
    ];
}
