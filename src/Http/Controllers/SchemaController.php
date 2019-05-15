<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Rocketfirm\Rdrive\Http\Resources\SchemaResource;

class SchemaController extends Controller
{
    public function index()
    {
        $models = config('rdrive.schemas', []);
        $schemas = [];
        foreach ($models as $model) {
            $schemas[] = new SchemaResource(new $model);
        }

        return [
            'success' => true,
            'data' => $schemas
        ];
    }
}
