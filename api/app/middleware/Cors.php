<?php

namespace App\Middleware;

use Accolon\Route\MiddlewareGlobal;

class Cors extends MiddlewareGlobal
{
    public function handle(\Accolon\Route\Request $request, \Accolon\Route\Response $response): array
    {
        // $response->addHeader("Access-Control-Allow-Origin", "*");
        
        return [
            $request,
            $response
        ];
    }
}