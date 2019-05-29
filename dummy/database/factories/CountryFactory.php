<?php

use App\Models\Country;
use Faker\Generator as Faker;

$factory->define(Country::class, function (Faker $faker) {
    $languages = config('translatable.locales');

    $country = [
        'code' => strtoupper($faker->word),
    ];

    if (!empty($languages)) {
        foreach ($languages as $language) {
            $country[$language] = [
                'name' => $faker->word
            ];
        }
    }

    return $country;
});
