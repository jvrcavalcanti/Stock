<?php

namespace App\Middleware;

use Accolon\Route\Middleware;
use Accolon\Route\Request;
use Accolon\Route\Response;
use Closure;

class JsonResponse extends Middleware
{
    public function handle(Request $request, Response $response, Closure $next): ?string
    {
        return $response->json($next($request, $response));
    }
}