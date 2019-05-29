<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

class RdriveBaseController extends Controller
{
    public function index()
    {
        return view('rdrive::index');
    }
}
