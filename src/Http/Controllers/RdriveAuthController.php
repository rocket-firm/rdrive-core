<?php

namespace Rocketfirm\Rdrive\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Rocketfirm\Rdrive\Http\Resources\UserResource;

class RdriveAuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            $token = auth()->user()->createToken('Laravel Password Grant Client')->accessToken;
            return response(['token' => $token]);
        } else {
            return response(['message' => 'Unauthenticated.'], Response::HTTP_UNAUTHORIZED);
        }
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function user()
    {
        return response(new UserResource(auth()->user()));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        auth()->user()->token()->revoke();
        return response(['message' => 'Successfully logged out']);
    }
}
