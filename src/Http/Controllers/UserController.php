<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Http\Resources\UserProfileResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\AttributeResource;
use App\Models\Flat;
use App\Models\RealEstate;
use App\Models\SmsVerification;
use App\Models\User;
use App\Models\UserStatus;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UserController extends BaseController
{
    protected $modelClass = User::class;
    protected $modelResourceClass = UserResource::class;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('isAdmin');

        $this->validate($request, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'required|min:11|max:11|unique:users',
            'email' => 'string|max:255|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'min_budget' => 'integer',
            'max_budget' => 'integer'
        ]);

        $request['password'] = \Hash::make($request['password']);

        $model = User::create($request->all());

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

        $model = User::findOrFail($id);

        $this->validate($request, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'birth_date' => 'string|max:255',
            'city_id' => 'required|integer|max:255',
            'email' => 'string|max:255|email|unique:users,email,' . $model->id,
            'phone' => 'required|min:11|max:11|unique:users,phone,' . $model->id,
            'password' => 'required|sometimes|string|min:6|confirmed',
            'min_budget' => 'integer',
            'max_budget' => 'integer'
        ]);

        if (!empty($request->password)) {
            $request->merge(['password' => \Hash::make($request->password)]);
        }

        $model->update($request->all());

        return $this->serializeModel($model);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        return new UserProfileResource(auth('api')->user());
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'required|min:11|max:11|unique:users',
            'email' => 'string|max:255|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $smsVerification = SmsVerification::where('phone', '=', $request['phone'])->firstOrFail();

        if ($smsVerification->is_confirm === SmsVerification::STATUS_NOT_CONFIRM) {
            throw ValidationException::withMessages(['phone' => 'Ваш телефон не потвержден.']);
        }

        $password = $request['password'];
        $request['password'] = \Hash::make($password);

        $model = $this->modelClass::create($request->all());

        return response()->json([
            'data' => [
                'phone' => $request['phone'],
                'password' => $password
            ]
        ]);
    }

    public function resetPassword(Request $request)
    {
        $this->validate($request, [
            'phone' => 'required|min:11|max:11',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::where('phone', '=', $request['phone'])->firstOrFail();
        $smsVerification = SmsVerification::where('phone', '=', $request['phone'])->firstOrFail();

        if ($smsVerification->is_confirm === SmsVerification::STATUS_NOT_CONFIRM) {
            throw ValidationException::withMessages(['phone' => 'Ваш телефон не потвержден.']);
        }

        $request['password'] = \Hash::make($request['password']);

        $user->update($request->all());

        return new UserProfileResource(($user));
    }

    /**
     * Редактирование персональных данных пользователя
     * @param Request $request
     * @return mixed
     */
    public function updateInfo(Request $request)
    {
        $user = auth('api')->user();

        $this->validate($request, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'birth_date' => 'string|max:255',
            'city_id' => 'required|integer|max:255',
            'email' => 'string|max:255|email',
            'min_budget' => 'integer',
            'max_budget' => 'integer'
        ]);

        $user->update($request->all());

        // Удаляем все текущие статусы пользователя
        $user->userStatuses()->delete();
        if (isset($request['status']) && is_array($request['status']) && !empty($request['status'])) {
            // Сохраняем статусы
            foreach ($request['status'] as $status) {
                $user->userStatuses()->make([
                    'status' => $status
                ])->save();
            }
        }

        return new UserProfileResource(($user));
    }

    /**
     * Редактирование защищенных данных пользователя (пароль, телефон и т.п)
     * @param Request $request
     * @return mixed
     */
    public function updateSecurity(Request $request)
    {
        $user = auth('api')->user();

        $this->validate($request, [
            'current_password' => 'required|current_password',
            'new_password' => 'required|string|min:6|confirmed|different:current_password',
        ]);

        $request['password'] = \Hash::make($request['new_password']);

        $user->update($request->all());

        return new UserProfileResource(($user));
    }

    public function updateImage(Request $request)
    {
        $user = auth('api')->user();

        if (!empty($request['image']) && ($request['image'] !== $user->image)) {
            // Check extension
            $imageName = preg_match_all('/data\:image\/([a-zA-Z]+)\;base64/', $request['image'], $matched);
            $ext = isset($matched[1][0]) ? $matched[1][0] : false; // png

            // Generate name
            $imageName = sha1(time()) . '.' . $ext; // d2314e45e2108175971915f8a5a788c18fe7fd1b.png

            // Make image
            list($baseType, $image) = explode(',', $request['image']); // iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAA...
            $image = base64_decode($image);

            // Save path
            $path = 'users/' . $user->id . '/' . $imageName; // users/23/d2314e45e2108175971915f8a5a788c18fe7fd1b.png

            \Storage::disk('uploads')->put($path, $image);

            $request->merge(['image' => $path]);

            $currentUserPhotoPath = public_path('uploads/' . $user->image);
            if (file_exists($currentUserPhotoPath)) {
                @unlink($currentUserPhotoPath);
            }

            $user->update($request->all());
        }

        return new UserProfileResource(($user));
    }

    /**
     * Добавление в избранное
     *
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     */
    public function addFavorites(Request $request)
    {
        /** @var User $user */
        $user = auth('api')->user();

        $this->validate($request, [
            'item_id' => 'required',
            'type' => ['required', 'regex:/\b(real_estate|flat)\b/'],
        ]);

        $itemIds = (array) $request['item_id'];

        if (is_array($itemIds) && !empty($itemIds)) {
            if ($request['type'] === 'real_estate') {
                foreach ($itemIds as $itemId) {
                    if (RealEstate::where('item_id', '=', $itemId)->exists()) {
                        $user->favoriteRealEstates()->attach($itemId, ['type' => $request['type']]);
                    } else {
                        throw ValidationException::withMessages(['item_id' => 'item_id ' . $itemId . ' не найден.']);
                    }
                }
            } elseif ($request['type'] === 'flat') {
                foreach ($itemIds as $itemId) {
                    if (Flat::where('item_id', '=', $itemId)->exists()) {
                        $user->favoriteFlats()->attach($itemId, ['type' => $request['type']]);
                    } else {
                        throw ValidationException::withMessages(['item_id' => 'item_id ' . $itemId . ' не найден.']);
                    }
                }
            }

            return new UserProfileResource(($user));
        }

        throw ValidationException::withMessages(['item_id' => 'item_id не может быть пустым.']);
    }

    /**
     * Убрать из избранных
     *
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     */
    public function removeFavorites(Request $request)
    {
        /** @var User $user */
        $user = auth('api')->user();

        $this->validate($request, [
            'item_id' => 'required',
            'type' => ['required', 'regex:/\b(real_estate|flat)\b/'],
        ]);

        $itemIds = (array) $request['item_id'];

        if (is_array($itemIds) && !empty($itemIds)) {
            if ($request['type'] === 'real_estate') {
                foreach ($itemIds as $itemId) {
                    if (RealEstate::where('item_id', '=', $itemId)->exists()) {
                        $user->favoriteRealEstates()->detach($itemId, ['type' => $request['type']]);
                    } else {
                        throw ValidationException::withMessages(['item_id' => 'item_id ' . $itemId . ' не найден.']);
                    }
                }
            } elseif ($request['type'] === 'flat') {
                foreach ($itemIds as $itemId) {
                    if (Flat::where('item_id', '=', $itemId)->exists()) {
                        $user->favoriteFlats()->detach($itemId, ['type' => $request['type']]);
                    } else {
                        throw ValidationException::withMessages(['item_id' => 'item_id ' . $itemId . ' не найден.']);
                    }
                }
            }

            return new UserProfileResource(($user));
        }

        throw ValidationException::withMessages(['item_id' => 'item_id не может быть пустым.']);
    }

    /**
     * Возвращаем список статусов
     *
     * @return array
     */
    public function getStatuses()
    {
        $statuses = User::$statuses;

        return response()->json(['data' => $statuses]);
    }
}