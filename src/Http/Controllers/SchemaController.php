<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Rocketfirm\Rdrive\Http\Resources\SchemaResource;
use Rocketfirm\Rdrive\Models\Setting;

class SchemaController extends Controller
{
    public function index()
    {
        return
            [
                'success' => true,
                'data' => config('rdrive.schemas', [])
            ];
    }
}
