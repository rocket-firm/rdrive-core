<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use App\Http\Controllers\TranslatableController;
use App\Http\Resources\SettingResource;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends RdriveCrudController
{
    protected $modelClass = Setting::class;
    protected $modelResourceClass = SettingResource::class;


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
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
        ]);

        $request['group'] = strtolower($request['group']);

        $model = new $this->modelClass();

        $model->fill(array_merge($request->all(), [
            'lang' => $request->header('Language')
        ]));

        $model->createWithTranslations();

        return $this->serializeModel($model);
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

        $this->validate($request, [
            'group' => 'required|string|max:255',
            'key' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
        ]);

        $model = $this->getModel($id);
        $model->update($request->all());

        return $this->serializeModel($model);
    }

    /**
     * Возвращаем список групп настроек
     *
     * @return array
     */
    public function getGroups()
    {
        $groups = array_column($this->modelClass::select('group')
            ->groupBy('group')
            ->get()
            ->toArray(), 'group');

        return response(['data' => $groups]);
    }

    /**
     * Возвращаем список всех настроек
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function getList()
    {
        $settings = $this->modelClass::all();

        $data = [];

        foreach ($settings as $setting) {
            $data[$setting->lang][$setting->group][$setting->key] = $setting->value;
        }

        return response(['data' => $data]);
    }
}
