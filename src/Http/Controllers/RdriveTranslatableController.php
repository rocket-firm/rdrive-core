<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Illuminate\Http\Request;
use Rocketfirm\Rdrive\Http\Resources\TranslationsCollection;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class RdriveTranslatableController extends RdriveBaseController
{

    /**
     * TranslatableController constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->middleware('language');
    }

    public function index(Request $request)
    {
        $lang = $request->header('Language', 'ru');

        $query = $this->getLangQuery($lang)->lang($lang);

        if (!$request->all) {
            $query = $query->paginate();
        } else {
            $query = $query->get();
        }

        return $this->modelResourceClass::collection($query);
    }

    public function destroy($id)
    {
        $model = $this->modelClass::item($id)->delete();
        if ($model === 0) {
            throw new NotFoundHttpException('No query results for model [' . $this->modelClass . '].');
        }

        return response('Deleted');
    }

    protected function getModel($id)
    {
        return $this->modelClass::item($id)->lang(request()->header('Language'))->firstOrFail();
    }

    /**
     * @param $id
     * @return TranslationsCollection
     */
    public function showTranslations($id)
    {
        $models = $this->modelClass::item($id)->get()->map(function ($model) {
            return new $this->modelResourceClass($model);
        });

        return new TranslationsCollection($models);
    }

    public function showAllModelsTranslations()
    {
        $models = $this->modelClass::get()->map(function ($model) {
            return new $this->modelResourceClass($model);
        })->mapToGroups(function ($model, $key) {
            return [$model->item_id => $model];
        })->map(function ($collection) {
            return new TranslationsCollection($collection);
        });

        return ['data' => $models];
    }
}
