<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Rocketfirm\Rdrive\Http\Requests\LanguageLineRequest;
use Rocketfirm\Rdrive\Http\Resources\LanguageLineResource;
use Spatie\TranslationLoader\LanguageLine;

class TranslationController extends RdriveBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(LanguageLineResource::collection(LanguageLine::all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  LanguageLineRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LanguageLineRequest $request)
    {
        $languageLine = LanguageLine::create($request->all());
        return response(new LanguageLineResource($languageLine));
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $languageLine = LanguageLine::findOrFail($id);

        return response(new LanguageLineResource($languageLine));
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
        $languageLine = LanguageLine::findOrFail($id);

        $languageLine->update($request->all());

        return response(new LanguageLineResource($languageLine));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $languageLine = LanguageLine::findOrFail($id);

        $languageLine->delete();

        return response([
            'message' => 'Successfully deleted'
        ]);
    }

    /**
     * Возвращает языки системы
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLocales()
    {
        $locales = config('translatable.locales');
        $defaultLocale = config('app.locale');
        return response([
            'data' => $locales,
            'default' => $defaultLocale,
        ]);
    }
}
