<?php

$namespace = '\Rocketfirm\Rdrive\Http\Controllers';

Route::group([
    'as' => 'api.admin.',
    'prefix' => 'api/admin',
    'namespace' => $namespace,
//    'middleware' => ['api', 'auth:api']
], function () {

    // Schemas
    Route::group([
        'as' => 'schemas.',
        'prefix' => 'schemas',
    ], function () {
        Route::get('/', ['uses' => 'SchemaController@index', 'as' => 'index']);
    });

    // Localizations
    Route::group([
        'as' => 'localizations.',
        'prefix' => 'localizations',
    ], function () {
        Route::get('locales', ['uses' => 'LocalizationController@getLocales', 'as' => 'locales']);
    });

});
