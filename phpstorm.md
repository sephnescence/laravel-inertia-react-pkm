# Getting used to PhpStorm

I've been working through https://laracasts.com/series/phpstorm-for-laravel-developers

## Undecided

1. Format on save. Seems good. It's got the option of being set to a PSR-12 standard or a Laravel standard, which is
   apparently "close to PSR-12". What I'm reading in that, is that I will have to fight other CLI tools that assert code
   style
2. One of those tools is Pint, which I can opt to run instead of the default. In the past I've been apprehensive about
   it, but so far it seems to follow PSR-12 out of the box. I'm not sure of the configuration I've seen in the past that
   made it look strange to me. It could just be that Pint has better defaults now

## What I like

1. IDE helper generation is pretty seamless, at least with the help of Laravel Idea
2. Cmd+E! I've missed you so. And I can hit it again to look at recent files I've changed. This was a headache for me in
   vscode
3. I can move my cursor back out of the Terminal with Cmd+E. I still have to hit up to select the current file. There's
   probably a better way to do this, but at least it's better than vscode where I have to use the mouse

## What I hate

1. Copy relative path is a multi-click ordeal. vscode has it natively on the dropdown when you right-click a file
2. Laravel Idea doesn't seem to be able to handle mono-repos. I have to open the folder at the Laravel level. It will be
   able to create models, etc. in the appropriate place, but the icon doesn't seem to appear everywhere it should
3. It doesn't follow proper markdown conventions. It complains that I don't have bullet points explicitly as 1. 2. 3.
   The format is 1. 1. 1. Take your opinion elsewhere

## What I don't like

1. I've even been somewhat encouraged to use Pint. In the past I haven't been impressed by the formatting rules, but for
   the moment it seems to be ok. It's set up to run as a File Watcher whenever I save a PHP file. a nitpick, is that
   your code has to be in an executable state for it to do things like adding a comma at the end of an
   array item, but what I don't like is that it's not the same as running something like rector. It won't format
   everything that's weird about the formatting. It's apparently set to PSR-12 though, which is kind of all that matters
2. The keybindings are "ok", but they get in my way by default. For example if I want to go to the end of the file,
   that's
   cmd + down. But that behaves as if I want to click through to something. That's fine on a macOS level, and I love
   that shortcut. For code, I prefer just holding cmd and clicking. Cmd + up shows a floating navigator instead of going
   to the top of the file