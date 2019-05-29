<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CountryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'code' => 'required'
        ];

        $languages = config('translatable.locales');

        if (!empty($languages)) {
            foreach ($languages as $language) {
                $rules[$language . '.name'] = 'required';
            }
        }

        return $rules;
    }
}
