<?php

require_once "../vendor/autoload.php";
require_once "../routes.php";

$app->middlewares(MIDDLEWARES);

// dd($_GET);

$app->dispatch();

