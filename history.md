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
8. `./vendor/bin/sail composer remove phpunit/phpunit`
9. `./vendor/bin/sail composer require pestphp/pest --dev --with-all-dependencies`
10. `./vendor/bin/pest --init`
11. `npm i -D prettier prettier-plugin-tailwindcss`. Tailwind was already installed by breeze
12. `touch .prettierrc.json`. I entered my favourites: semi - false, singleQuotes - true, and enabled the
    prettier-plugin-tailwindcss plugin
13. Installing Nova: Start with
    `composer config repositories.nova '{"type": "composer", "url": "https://nova.laravel.com"}' --file composer.json`
14. `./vendor/bin/sail composer require laravel/nova` will then require you to log in to the above repo with your nova
    login email address and a license key. You can opt to save the login information as long as it's outside of this
    repository. For me, it saved to `/home/sail/.config/composer/auth.json`
15. `./vendor/bin/sail artisan nova:install`
16. `./vendor/bin/sail artisan migrate` to install the nova tables, such as action events and notifications.
    See https://nova.laravel.com/docs/actions/defining-actions.html,
    and https://nova.laravel.com/docs/customization/notifications.html. The full list of migrations is
    `create_action_events_table`, `add_fields_to_action_events_table`, `create_nova_notifications_table`,
    `add_fields_to_nova_notifications_table`, and `create_field_attachments_table`
17. `./vendor/bin/sail artisan nova:user` runs a command that prompts you for the username, email address, and password
    for the user that can log into Nova
18. Add `NOVA_LICENSE_KEY` to `.env` and `.env.example`, for use within `config/nova.php`
19. Add `Nova::withBreadcrumbs();` to `breeze-react/app/Providers/NovaServiceProvider.php`
20. Bring down your containers and run `./vendor/bin/sail up`, and `./vendor/bin/sail npm run dev` again. You can now
    access Nova on `http://localhost/nova`