I want to ultimately get to the Breeze + React Starter Kit, but I must start from the beginning, so I'll begin by
following the Laravel 11 installation guide - https://laravel.com/docs/11.x/installation#sail-on-macos

I intend to use Breeze to set myself up with the React starter kit and follow Kent's Epic React v2, which launches
September 23, 2024 (a week from now). The first chapter is free so let's get started!

1. `curl -s "https://laravel.build/breeze-react" | bash`
2. Updated `.env`'s APP_NAME, and APP_TIMEZONE
3. `./vendor/bin/sail up`
4. `./vendor/bin/sail artisan migrate`
5. `./vendor/bin/sail composer require laravel/breeze --dev`
6. `./vendor/bin/sail artisan breeze:install react --ssr`
7. `./vendor/bin/sail composer require laravel/pint --dev`