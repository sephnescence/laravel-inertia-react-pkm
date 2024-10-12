<?php

namespace App\Http\Controllers;

class LocationsIndexController extends Controller
{
    public function __invoke()
    {
        $locations = auth()->user()->locations()->orderBy('display_name')->get(['display_name']);

        return view('locations.index', compact('locations'));
    }
}
