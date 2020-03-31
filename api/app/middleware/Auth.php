<?php

namespace App\Middleware;

use Accolon\Route\Middleware;
use Accolon\Route\Request;
use Accolon\Route\Response;
use Accolon\Token\Token;
use Closure;

class Auth extends Middleware
{
    public function handle (Request $request, Response $response, Closure $next): ?string
    {
        if(!$request->get("token") || !Token::verify($request->get("token"))) {
            return $response->text("Access invalid", 401);
        }

        return $next($request, $response);
    }
}
