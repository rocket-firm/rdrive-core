<?php

$namespace = '\Rocketfirm\Rdrive\Http\Controllers';

Route::group([
    'as' => 'api.admin.',
    'prefix' => 'api/admin',
    'namespace' => $namespace,
    'middleware' => ['api', 'localization']
], function () {
    // Auth
    Route::group([
        'as' => 'auth.',
        'prefix' => 'auth'
    ], function () {
        Route::post('login', ['uses' => 'RdriveAuthController@login', 'as' => 'login']);
        Route::group([
            'middleware' => ['auth:api', 'role:admin']
        ], function () {
            Route::get('user', ['uses' => 'RdriveAuthController@user', 'as' => 'user']);
            Route::post('logout', ['uses' => 'RdriveAuthController@logout', 'as' => 'logout']);
        });
    });

    Route::group([
        'middleware' => ['auth:api', 'role:admin']
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

        Route::apiResources([
            'localizations' => 'LocalizationController'
        ]);
    });
});
