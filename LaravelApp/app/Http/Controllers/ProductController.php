<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'string|required|min:1|max:255',
            'description' => 'string|required|min:1|max:2000',
            'image' => 'array|required|size:1',
            'image.*' => 'image|required|max:10240'
        ]);

        $imagePath = $request->file('image')[0]->store('/images/products', ['disk' => 'public']);

        $productDTO = [
            "title" => $request->input('title'),
            "description" => $request->input('description'),
            "image" => $imagePath
        ];

        $created = new Product($productDTO)->save();

        return ["created" => $created];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(string $id)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
