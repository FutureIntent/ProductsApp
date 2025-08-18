<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


Route::resource('products', ProductController::class)->only(['index', 'show']);
Route::resource('products', ProductController::class)->only(['store', 'update', 'destroy'])->middleware('auth:sanctum');
