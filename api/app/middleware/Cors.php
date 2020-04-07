<?php

namespace App\Middleware;

use Accolon\Route\MiddlewareGlobal;

class Cors extends MiddlewareGlobal
{
    public function handle(\Accolon\Route\Request $request, \Accolon\Route\Response $response): array
    {
        $response->setHeader("Access-Control-Allow-Origin", "*");
        header("Access-Control-Allow-Origin: *", true);
        $response->setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
        $response->setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        
        return [
            $request,
            $response
        ];
    }
}