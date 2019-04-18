<?php

Route::group([
    'as' => 'api.admin.',
    'prefix' => 'api/admin',
], function () {

    // Schemas Routes
    Route::group([
        'as' => 'schemas.',
        'prefix' => 'schemas',
        'middleware' => 'api'
    ], function () {
        Route::get('/', ['uses' => 'Rocketfirm\Rdrive\Http\Controllers\SchemaController@index', 'as' => 'index']);
    });

});
