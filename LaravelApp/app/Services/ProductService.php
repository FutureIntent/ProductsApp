<?php

namespace App\Services;

use App\Models\Product;
use App\Services\Interfaces\ProductInterface;
use Illuminate\Http\Request;


class ProductService implements ProductInterface
{

    public function __construct() {}

    public function index(Request $request): array
    {

        $request->validate([
            'page' => 'integer|required|min:1',
            'limit' => 'integer|required|min:1',
            'filters' => 'array|required',
            'filters.title' => 'string|nullable'
        ]);

        $products = Product::simplePaginate($request->query('limit'));
        $productsDTO = [
            'products' => [],
            'hasMore' => true
        ];

        foreach ($products->items() as $product) {
            array_push($productsDTO['products'], $product);
        }
        $productsDTO['hasMore'] = $products->hasMorePages();
        // dd($productsDTO);
        return $productsDTO;
    }

    public function store(Request $request): bool
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

        return $created;
    }
    public function show() {}

    public function update() {}

    public function destroy() {}
}
