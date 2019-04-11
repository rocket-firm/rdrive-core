<?php

Route::get('/admin/{path?}', function () {
    return view('rdrive::admin');
})->where('path', '([A-z\d-\/_.]+)?')->middleware('web');