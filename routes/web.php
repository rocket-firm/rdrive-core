<?php

$namespace = '\Rocketfirm\Rdrive\Http\Controllers';

Route::group(['namespace' => $namespace, 'middleware' => 'web'], function () {
    Route::get('/admin/{path?}', 'RdriveBaseController@index')
        ->where('path', '([A-z\d-\/_.]+)?');
});
