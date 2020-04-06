<?php

namespace App\Middleware;

use Accolon\Route\MiddlewareGlobal;

class Cors extends MiddlewareGlobal
{
    public function handle(\Accolon\Route\Request $request, \Accolon\Route\Response $response): array
    {
        $response->setHeader("Access-Control-Allow-Origin", "*");
        $response->setHeader("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
        $response->setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );

        return [
            $request,
            $response
        ];
    }
}