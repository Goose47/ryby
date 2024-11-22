<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/pedigree', function (Request $request) {
    return response()->json([
        [
            'animal_id' => 'af32afe',
            'papa_id' => 'l1h4o23',
            'mama_id' => '1j3f19i',
        ],
        [
            'animal_id' => '12jh92i',
            'papa_id' => 'l1kj2b38',
            'mama_id' => 'p0192mdc',
        ],
        [
            'animal_id' => 'ndb182id',
            'papa_id' => 'cmo19821',
            'mama_id' => 'mnc1920c',
        ],
    ]);
});
Route::post('/pedigree', function (Request $request) {
    if (rand(0, 1) === 1) {
        return response(null, 400)->json([
            'reason' => "Цикл в деревне!"
        ]);
    }
    return response()->json([
        'animal_id' => 'af32afe',
        'papa_id' => 'l1h4o23',
        'mama_id' => '1j3f19i',
    ]);
});
