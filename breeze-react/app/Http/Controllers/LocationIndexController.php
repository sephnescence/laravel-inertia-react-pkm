<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LocationIndexController extends Controller
{
    public function __invoke()
    {
        $locations = auth()->user()->locations()->orderBy('display_name')->get(['display_name']);

        return Inertia::render('Location/Index', [
            'locations' => $locations,
        ]);
    }
}
