<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\CountryResource;
use App\Models\Country;
use Rocketfirm\Rdrive\Http\Controllers\RdriveCrudController;

class CountryController extends RdriveCrudController
{
    /**
     * @var Country
     */
    protected $modelClass = Country::class;

    /**
     * @var CountryResource
     */
    protected $modelResourceClass = CountryResource::class;
}
