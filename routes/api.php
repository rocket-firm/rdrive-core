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

    // Translations
    Route::group([
        'as' => 'translations.',
        'prefix' => 'translations',
    ], function () {
        Route::get('locales', ['uses' => 'TranslationController@getLocales', 'as' => 'locales']);
    });

    Route::apiResources([
        'translations' => 'TranslationController'
    ]);

});
