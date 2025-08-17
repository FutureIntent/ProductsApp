<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


Route::resource('products', ProductController::class)->except(['create', 'edit'])->middleware('auth:sanctum');
