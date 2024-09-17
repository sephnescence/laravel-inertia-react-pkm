# Rethought in PHP | Breeze | Inertia | Epic React v2

Check out [history.md](history.md) for how I bootstrapped this project

## Development

1. Controllers should now `return Inertia::view` instead of the classic `return view('template/path')`
   1. For example `breeze-react/app/Http/Controllers/ProfileController.php`
   1. The view is `return Inertia::render('Profile/Edit'`
   1. Which references `breeze-react/resources/js/Pages/Profile/Edit.jsx`

## Quick start

1. Dive in with: `cd breeze-react` && `./vendor/bin/sail up`
   1. I'm not too sure how to jailbreak this as yet. I will probably deploy it to Fargate or EC2
   1. Also, interesting - Selenium makes logs about OpenTelemetry. Wonder if that's properly supported out of the box
1. But before you actually do the above, be sure to do the normal `cp .env.example .env`
   1. There's a command to generate `APP_KEY` but I forgot what that is
1. You'll also need to seed the database
1. By default the site's url is `http://0.0.0.0/`
   1. I haven't added an HTTPS cert yet
   1. It will likely crash on the first load
1. Run `./vendor/bin/sail artisan migrate`
   1. `http://0.0.0.0/` should now load
