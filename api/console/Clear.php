<?php

namespace Console;

require_once "./vendor/autoload.php";

class Clear
{
    public static function images()
    {
        $dir = "./public/images";
        deldir($dir);
    }
}