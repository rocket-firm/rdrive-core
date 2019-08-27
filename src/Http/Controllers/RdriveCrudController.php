<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

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
        return $this->modelResourceClass::collection($this->modelClass::paginate());
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
