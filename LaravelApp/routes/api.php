<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/zxc', function (Request $request) {
    return ["zxc" => "zzz"];
});


require __DIR__ . '/api/user.php';
require __DIR__ . '/api/products.php';
