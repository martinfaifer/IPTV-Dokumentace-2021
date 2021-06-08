<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\Multicast;
use App\Models\NanguChannel;
use App\Models\SatelitCard;
use App\Models\Topics;
use App\Models\User;
use App\Models\Wiki;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return [
            'users' => User::all()->count(),
            'users_blocket' => User::where('status', "!=", 'access')->get()->count(),
            'multicasts' => Multicast::all()->count(),
            'h264s' => H264::all()->count(),
            'h265s' => H265::all()->count(),
            'devices' => Device::all()->count(),
            'cards' => SatelitCard::all()->count(),
            'categories' => Wiki::all()->count(),
            'topics' => Topics::all()->count(),
            // celkový počet kanálů / nangu vazeb pro pie chart
            'piechart_series' => [
                Channel::all()->count(),
                NanguChannel::all()->count()
            ],
            'piechart_labels' => ["Kanály", "Kanály s vazbou u Nangu"],
            'piechart_series_radio' => [
                Channel::where('is_radio', null)->orWhere('is_radio', false)->count(),
                Channel::where('is_radio', "1")->count(),
            ],
            'piechart_labels_radio' => ["TV kanály", "Rádia"],
            'channles_chart' => $this->channels_charts()
        ];
    }


    protected function channels_charts()
    {
        $results = Multicast::orderBy('updated_at')
            ->get(['updated_at'])
            ->groupBy(function ($interval) {
                return Carbon::parse($interval->updated_at)->format('d-m-y');
            });

        foreach ($results as $day => $result) {

            $seriesData[] = count($result);
            $xaxis[] = $day;
        }

        return [
            'status' => "exist",
            'xaxis' => $xaxis,
            'seriesData' => $seriesData
        ];
    }
}
