<?php

namespace App\Services\Interfaces;

use Illuminate\Http\Request;

interface ProductInterface
{
    public function index(Request $request): array;
    public function store(Request $request): bool;
    public function show();
    public function update();
    public function destroy();
}
