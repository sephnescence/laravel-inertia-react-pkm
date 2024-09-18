# Rethought in Laravel 11 | Breeze | Inertia | Epic React v2

Check out [history.md](history.md) for how I bootstrapped this project

## Development

1. Controllers should now `return Inertia::view` instead of the classic `return view('template/path')`
   1. For example `breeze-react/app/Http/Controllers/ProfileController.php`
   1. The view is `return Inertia::render('Profile/Edit'`
   1. Which references `breeze-react/resources/js/Pages/Profile/Edit.jsx`

## Quick start

1. Make sure you're in the right directory - `cd breeze-react`
1. Run the following - `cp .env.example .env` and make updates accordingly
   1. `APP_KEY` is required to boot Laravel. You can run `./vendor/bin/sail artisan key:generate` to generate it
1. Run `./vendor/bin/sail up`
1. Run `./vendor/bin/sail artisan migrate`
1. Run `./vendor/bin/sail npm run dev` in another terminal window
1. By default the site's url is `http://localhost`

1. By default the site's url is `http://0.0.0.0/`
1. `sail up` will essentially run the sit in production mode. If you want Hot Module Replacement, you will also need to run `./vendor/bin/sail npm run dev` in another terminal window

## Troubleshooting

1. If your app fails to start - Make sure you've migrated the database
   1. It will likely crash on the first load if you haven't migrated yet
1. I have visited `http://0.0.0.0/` and nothing loads
   1. Running `sail up` will expose `http://0.0.0.0/`, but after running `sail npm run dev` this address ceases to work properly. Leading to some confusion. Be sure to try `http://localhost`, but more specifically, pay attention to the address that's in your second terminal when running `./vendor/bin/sail npm run dev`
