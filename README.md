# TODO
## Installation
After creating your new Laravel application you can include the Rdrive package with the following command:
```shell
composer require rocket-firm/rdrive-core
```

Next make sure to create a new database and add your database credentials to your .env file, you will also want to add your application URL in the `APP_URL` variable:
```dotenv
APP_URL=http://project.test

DB_DATABASE=db_project
DB_USERNAME=root
DB_PASSWORD=
```

In `config/app.php` (Laravel) you should replace Laravel's translation service provider

```php
Illuminate\Translation\TranslationServiceProvider::class,
```

by the one included in this package:

```php
Spatie\TranslationLoader\TranslationServiceProvider::class,
```

Finally, we can install Rdrive. You can choose to install Rdrive with dummy data or without the dummy data. The dummy data will include 1 admin account (if no users already exist), 1 demo page, 4 demo posts, 2 categories and 7 settings.  

<details>
  <summary>Install without dummy data</summary>
  
```shell
php artisan rdrive:install
  
php artisan migrate
```
</details>

<details>
  <summary>Install with dummy data</summary>
  
```shell
php artisan rdrive:install --with-dummy

php artisan migrate

composer dump-autoload

php artisan db:seed --class=RdriveDummyDatabaseSeeder
```

Then add these dummy routes in your `api.php` file:
```php
Route::apiResources(['countries' => 'API\Admin\CountryController']);
```
</details>

---

And we're all good to go!  
Start up a local development server with php artisan serve And, visit the URL http://localhost:8000/admin in your browser.  

If you installed with the dummy data, a user has been created for you with the following login credentials:
> **email**: admin@admin.com  
> **password**: 123456

