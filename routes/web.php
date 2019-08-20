<?php

$namespace = '\Rocketfirm\Rdrive\Http\Controllers';

Route::group(['namespace' => $namespace, 'middleware' => 'web'], function () {
    Route::get('/admin/{any?}', 'RdriveBaseController@index')
        ->where('any', '.*');
});
