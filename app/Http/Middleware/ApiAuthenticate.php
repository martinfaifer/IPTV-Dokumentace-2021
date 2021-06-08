<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class ApiAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        if (!isset($request->api_token)) {
            return abort(404);
        }

        if (!User::where('api_token',  $request->api_token)->first()) {
            return abort(404);
        }

        return $next($request);
    }
}
