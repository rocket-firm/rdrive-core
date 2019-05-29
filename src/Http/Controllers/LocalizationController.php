<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

class LocalizationController extends RdriveBaseController
{
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
