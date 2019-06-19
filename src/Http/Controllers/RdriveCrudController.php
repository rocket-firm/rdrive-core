<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Rocketfirm\Rdrive\Models\RdriveBaseModel;

class RdriveCrudController extends Controller
{
    /**
     * @var RdriveBaseModel
     */
    protected $modelClass;

    /**
     * @var JsonResource
     */
    protected $modelResourceClass;

    public function index(Request $request)
    {
        $lang = $request->header('Language', 'ru');

        $query = $this->getLangQuery($lang);

        return $this->modelResourceClass::collection($query->paginate());
    }

    public function show($id)
    {
        $model = $this->getModel($id);

        return $this->serializeModel($model);
    }

    public function showBySlug($slug)
    {
        $model = $this->getModelByAttribute('slug', $slug);

        return $this->serializeModel($model);
    }

    protected function getModel($id)
    {
        return $this->modelClass::where('id', $id)->firstOrFail();
    }

    protected function getModelByAttribute($attributeName, $value)
    {
        return $this->modelClass::where($attributeName, $value)->firstOrFail();
    }

    protected function serializeModel($model)
    {
        return new $this->modelResourceClass($model);
    }

    public function toggle(Request $request, $id)
    {
        $this->authorize('isAdmin');

        $this->validate($request, [
            'attribute' => 'required|string|max:255',
        ]);

        $model = $this->getModel($id);

        $attribute = $request['attribute'];

        $model->$attribute = intval(!boolval($model->{$attribute}));
        $model->save();

        return $this->serializeModel($model);
    }

    public function move(Request $request, $id)
    {
        $this->authorize('isAdmin');

        $this->validate($request, [
            'direction' => ['required', 'regex:/\b(up|down|start|end)\b/'],
        ]);

        $model = $this->getModel($id);

        switch ($request['direction']) {
            case 'up':
                $model = $model->moveOrderUp();
                break;
            case 'down':
                $model = $model->moveOrderDown();
                break;
            case 'start':
                $model = $model->moveToStart();
                break;
            case 'end':
                $model = $model->moveToEnd();
                break;
        }

        return $this->serializeModel($model);
    }
}
