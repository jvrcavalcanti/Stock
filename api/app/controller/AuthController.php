<?php

namespace App\Controller;

use Accolon\Route\Request;
use Accolon\Route\Response;
use Accolon\Token\Token;
use App\Model\User;

class AuthController
{
    public function register(Request $request)
    {
        if (!$request->get("username") || !$request->get("email") || !$request->get("password")) {
            return ["status" => 400, "success" => false, "message" => "Bad Request"];
        }

        $user = new User;

        $user->username = $request->get("username");
        $user->email = $request->get("email");
        $user->password = password_hash($request->get("password"), PASSWORD_BCRYPT);

        $result = $user->save();

        unset($user->password);

        if ($result) {
            return [
                "status" => 201,
                "success" => true,
                "user" => $user,
                "token" => Token::make($user)
            ];
        }

        return ["status" => 409, "success" => false, "message" => "User name/email already used"];
    }

    public function login(Request $request)
    {
        if (!$request->get("username") || !$request->get("password")) {
            return ["status" => 400, "success" => false, "message" => "Bad Request"];
        }

        $model = new User;

        $user = $model->select([
            "id",
            "username",
            "password"
        ])->where(["username", "=", $request->get("username")])->get(true);

        if (!$user) {
            return ["status" => 409, "success" => false, "message" => "User not found"];
        }
        
        if (!password_verify($request->get("password"), $user->password)) {
            return ["status" => 409 , "success" => false, "message" => "Incorrect password"];
        }

        unset($user->password);

        return [
            "status" => 200,
            "success" => true,
            "token" => Token::make($user),
            "user" => $user
        ];
    }
}