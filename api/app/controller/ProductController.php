<?php

namespace App\Controller;

use Accolon\Route\Request;
use Accolon\Route\Response;
use Accolon\Token\Token;
use App\Model\Product;

class ProductController
{
    public function show(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        if(!$request->get("id")) {
            return $response->json([
                "status" => 400,
                "success" => false,
                "message" => "Bad Request"
            ], 400);
        }

        $model = new Product;

        $result = $model->select()->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->get(true);

        return $response->json([
            "status" => $result ? 200 : 204,
            "success" => $result ? true : false,
            "product" => $result
        ], $result ? 200 : 204);
    }

    public function index(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        $product = new Product;

        $products = $product->where(["user_id", "=", $user->id])->get();

        return $response->json([
            "status" => $products ? 200 : 204,
            "success" => true,
            "products" => $products ?? []
        ], $products ? 200 : 204);
    }

    public function create(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        if(!$request->get("name") || !$request->get("description")
        || !$request->get("type") || !$request->get("quantity")) {
            return $response->json([
                "status" => 400,
                "success" => false,
                "message" => "Bad Request"
            ], 400);
        }

        $product = new Product;

        $product->name = $request->get("name");
        $product->description = $request->get("description");
        $product->type = $request->get("type");
        $product->quantity = $request->get("quantity");
        $product->user_id = $user->id;

        $result = $product->save();

        return $response->json([
            "status" => $result ? 201 : 409,
            "success" => $result,
            "product" => $product
        ], $result ? 201 : 409);
    }

    public function increment(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        if(!$request->get("id") || !$request->get("quantity")) {
            return $response->json([
                "status" => 400,
                "success" => false,
                "message" => "Bad Request"
            ], 400);
        }

        $model = new Product;

        $product = $model->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->get(true);

        $newQuantity = intval($product->quantity) + intval($request->get("quantity"));

        $result = $model->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->update([
            "quantity" => $newQuantity
        ]);

        return $response->json([
            "status" => $result ? 200 : 409,
            "success" => $result
        ], $result ? 200 : 409);
    }

    public function reduce(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        if(!$request->get("id") || !$request->get("quantity")) {
            return $response->json([
                "status" => 400,
                "success" => false,
                "message" => "Bad Request"
            ], 400);
        }

        $model = new Product;

        $product = $model->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->get(true);

        $newQuantity = intval($product->quantity) - intval($request->get("quantity"));

        if($newQuantity < 0) {
            return $response->json([
                "status" => 409,
                "success" => false,
                "message" => "Quantity can not less than 0"
            ]);
        }

        $result = $model->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->update([
            "quantity" => $newQuantity
        ]);

        return $response->json([
            "status" => $result ? 200 : 409,
            "success" => $result
        ], $result ? 200 : 409);
    }

    public function destroy(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        if(!$request->get("id")) {
            return $response->json([
                "status" => 400,
                "success" => false,
                "message" => "Bad Request"
            ], 400);
        }

        $model = new Product;

        $success = $model->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->delete();

        return $response->json([
            "status" => $success ? 200 : 409,
            "success" => $success
        ], $success ? 200 : 409);
    }

    public function update(Request $request, Response $response)
    {
        $user = Token::extract($request->get("token"));

        if(!$request->get("id") || !$request->get("name") || !$request->get("type")
        || !$request->get("description")) {
            return $response->json([
                "status" => 400,
                "success" => false,
                "message" => "Bad Request"
            ], 400);
        }

        $model = new Product;

        $success = $model->where([
            ["user_id", "=", $user->id],
            ["id", "=", $request->get("id")]
        ])->update([
            "name" => $request->get("name"),
            "description" => $request->get("description"),
            "type" => $request->get("type")
        ]);

        return $response->json([
            "status" => $success ? 200 : 409,
            "success" => $success ? true : false
        ], $success ? 200 : 409);
    }
}