# Rethought in Laravel 11 | Breeze | Inertia | Epic React v2

Check out [history.md](history.md) for how I bootstrapped this project

## Development

1. Controllers should now `return Inertia::view` instead of the classic `return view('template/path')`
    1. For example `breeze-react/app/Http/Controllers/ProfileController.php`
    2. The view is `return Inertia::render('Profile/Edit'`
    3. Which references `breeze-react/resources/js/Pages/Profile/Edit.jsx`
2. I've enabled Pint, which might have a mixed experience for me haha. See https://laravel.com/docs/11.x/pint for
   reference. I recommend adding Pint as a File Watcher. By default it will run with the Laravel preset. I've not had
   any issues with that at the moment
3. Rector will be coming soon. I want to use it to enforce that files remain in line with what artisan commands and
   Laravel Idea would make
4. PhpStan will be coming soon. At the moment, Pint will not enforce everything that I'm used to, like all items in an
   array being in the same tab depth
5. PEST v3 will be coming soon
6. GitHub Actions will be coming soon (as well as making PRs a requirement. I'm merging directly to main at the moment)
7. https://packagist.org/packages/openai-php/laravel

## Quick start

1. Make sure you're in the right directory - `cd breeze-react`
2. Run the following - `cp .env.example .env` and make updates accordingly
    1. `APP_KEY` is required to boot Laravel. You can run `./vendor/bin/sail artisan key:generate` to generate it
3. Run `./vendor/bin/sail up`
4. Run `./vendor/bin/sail artisan migrate`
5. Run `./vendor/bin/sail npm run dev` in another terminal window
6. By default, the site's url is `http://localhost`

7. By default, the site's url is `http://0.0.0.0/`
8. `sail up` will essentially run the site in production mode. If you want Hot Module Replacement, you will also need to
   run `./vendor/bin/sail npm run dev` in another terminal window

## Tooling

1. Experimenting with PhpStorm and Laravel Idea for now. This means that I won't need to worry about generating IDE
   Helpers because it's something I'll have to be in the habit of updating constantly with cmd+shift+.
2. Pest. You can run tests with `./vendor/bin/sail php ./vendor/bin/pest`. Remember to have `./vendor/bin/sail up`
   running in another terminal. Refer to the documentation here - https://pestphp.com/docs/writing-tests
3.

## General Tasks

### Installing a dependency

1. Ensure is Sail is running first. `./vendor/bin/sail up` if not.
2. Then run composer in another terminal. e.g. `./vendor/bin/sail composer require laravel/pint --dev`

## Troubleshooting

1. If your app fails to start - Make sure you've migrated the database
    1. It will likely crash on the first load if you haven't migrated yet
2. I have visited `http://0.0.0.0/` and nothing loads
    1. Running `sail up` will expose `http://0.0.0.0/`, but after running `sail npm run dev` this address ceases to work
       properly. Leading to some confusion. Be sure to try `http://localhost`, but more specifically, pay attention to
       the address that's in your second terminal when running `./vendor/bin/sail npm run dev`
