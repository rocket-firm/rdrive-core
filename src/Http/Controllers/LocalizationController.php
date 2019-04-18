<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Illuminate\Http\Request;
use Rocketfirm\Rdrive\Http\Resources\LocalizationResource;
use Rocketfirm\Rdrive\Models\Localization;

class LocalizationController extends RdriveTranslatableController
{
    protected $modelClass = Localization::class;
    protected $modelResourceClass = LocalizationResource::class;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO: Добавить валидацию на уникальность для полей lang, group, key
        $this->validate($request, [
            'group' => 'required|string|max:255',
            'key' => 'required|string|max:255',
            'value' => 'string|max:255',
        ]);

        $model = $this->modelClass::create(array_merge($request->all(), [
            'lang' => $request->header('Language')
        ]));

        return $this->serializeModel($model);
    }

    // TODO: add validation
    public function storeAllTranslations(Request $request)
    {
        $languages = config('rdrive.multilanguage.locales');
        $params = $request->all();
        if (!count($params)) {
            return [];
        }

        // Get entries that already exists in database
        $existingEntries = array_map(function ($group, $keys) {
            return Localization::where("group", $group)->whereIn("key", array_keys($keys))->get()->toArray();
        }, array_keys($params), $params);

        $existingEntries = call_user_func_array('array_merge', $existingEntries);

        $existingEntriesByGroups = array_reduce($existingEntries, function ($carry, $item) {
            if (!isset($carry[$item["group"]])) {
                $carry[$item["group"]] = [];
            }
            $carry[$item["group"]][$item["key"]] = $item["key"];
            return $carry;
        }, []);

        // Form entries to insert to the database
        $entries = [];
        $item_id = Localization::getLastItemId() + 1;
        foreach ($params as $group => $keys) {
            foreach ($keys as $key => $value) {
                if (isset($existingEntriesByGroups[$group][$key])) {
                    continue;
                }
                $attributes = [
                    "item_id" => $item_id++,
                    "group" => $group,
                    "key" => $key,
                    "value" => $value
                ];
                $translations = array_map(function ($lang) use ($attributes) {
                    $attributes["lang"] = $lang;
                    return $attributes;
                }, $languages);
                $entries = array_merge($entries, $translations);
            }
        }

        Localization::insert($entries);
        return $entries;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->authorize('isAdmin');

        // TODO: Добавить валидацию на уникальность для полей lang, group, key
        $this->validate($request, [
            'group' => 'required|string|max:255',
            'key' => 'required|string|max:255',
            'value' => 'string|max:255',
        ]);

        $model = $this->getModel($id);
        $model->update($request->all());

        return $this->serializeModel($model);
    }

    /**
     * Возвращаем список всех переводов
     *
     * @return \Illuminate\Http\Response
     */
    public function getList()
    {
        $localizations = Localization::all();

        $data = [];

        foreach ($localizations as $localization) {
            $data[$localization->lang][$localization->group][$localization->key] = $localization->value;
        }

        return response(['data' => $data]);
    }

    /**
     * Возвращает языки системы
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLanguages()
    {
        $languages = config('rdrive.multilanguage.locales');
        $defaultLanguage = config('app.locale');
        return response()->json([
            'data' => $languages,
            'default' => $defaultLanguage,
        ]);
    }

    // Переопределил родительский метод чтобы в getLangQuery передать false вторым параметром
    // тк в модели 'Localization' нет поля 'created_at.
    public function index(Request $request)
    {
        $lang = $request->header('Language', 'ru');

        $query = $this->getLangQuery($lang, false)->lang($lang);

        if (!$request->all) {
            $query = $query->paginate();
        } else {
            $query = $query->get();
        }

        return $this->modelResourceClass::collection($query);
    }

}