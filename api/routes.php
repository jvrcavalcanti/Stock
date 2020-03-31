<?php

$app = new \Accolon\Route\Route;

// Auth
$app->get(
    "/",
    fn($request, \Accolon\Route\Response $response) => $response->json(["token" => "Valid"]),
    \App\Middleware\Auth::class
);
$app->post("/auth/register", "AuthController.register", \App\Middleware\JsonResponse::class);
$app->post("/auth/login", "AuthController.login", \App\Middleware\JsonResponse::class);

// Product
$app->get("/product", "ProductController.index", \App\Middleware\Auth::class);
$app->get("/product/show", "ProductController.show", \App\Middleware\Auth::class);
$app->post("/product/new", "ProductController.create", \App\Middleware\Auth::class);
$app->put("/product/update", "ProductController.update", \App\Middleware\Auth::class);
$app->patch("/product/reduce", "ProductController.reduce", \App\Middleware\Auth::class);
$app->patch("/product/increment", "ProductController.increment", \App\Middleware\Auth::class);
$app->delete("/product/delete", "ProductController.destroy", \App\Middleware\Auth::class);