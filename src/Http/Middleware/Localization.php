<?php

namespace Rocketfirm\Rdrive\Http\Middleware;

use Closure;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $local = $request->hasHeader('Accept-Language') ? $request->header('Accept-Language') : config('app.locale');
        app()->setLocale($local);

        return $next($request);
    }
}
