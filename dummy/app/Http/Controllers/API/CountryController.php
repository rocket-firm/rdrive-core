<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\LanguageLineRequest;
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

    /**
     * Store a newly created resource in storage.
     *
     * @param LanguageLineRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(LanguageLineRequest $request)
    {
        $country = $this->modelClass::create($request->all());

        return $this->serializeModel($country);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param LanguageLineRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(LanguageLineRequest $request, $id)
    {
        $country = $this->modelClass::findOrFail($id);

        $country->update($request->all());

        return $this->serializeModel($country);
    }
}
