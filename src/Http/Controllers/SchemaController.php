<?php

namespace Rocketfirm\Rdrive\Http\Controllers;


class SchemaController extends Controller
{
    public function index()
    {
        return
            [
                'success' => true,
                'data' => array_merge(
                    [new SchemaResource(new Setting)]
                )
            ];
    }

}