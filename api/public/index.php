<?php

require_once "../vendor/autoload.php";
require_once "../routes.php";

$app->middlewares(MIDDLEWARES);

if($app->getMethod() === "options") {
    header("Status: 200", true);
    header("Access-Control-Allow-Origin: *", true);
    header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS", true);
    header("Access-Control-Allow-Headers: Content-Type");
    die();
}

$app->dispatch();

