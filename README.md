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

Finally, we can install Rdrive. You can choose to install Rdrive with dummy data or without the dummy data. The dummy data will include 1 admin account (if no users already exist), 1 demo page, 4 demo posts, 2 categories and 7 settings.  

To install Rdrive without dummy data simply run:
```shell
php artisan rdrive:install
```

If you prefer installing it with the dummy data run the following commands:
```shell
php artisan rdrive:install --with-dummy

composer dump-autoload

php artisan db:seed --class=RdriveDummyDatabaseSeeder
```

And we're all good to go!  
Start up a local development server with php artisan serve And, visit the URL http://localhost:8000/admin in your browser.  

If you installed with the dummy data, a user has been created for you with the following login credentials:
> **email**: admin@admin.com  
> **password**: 123456

