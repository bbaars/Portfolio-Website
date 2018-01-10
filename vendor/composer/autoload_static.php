<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita9da643d2199e3cc21454571248d45ae
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita9da643d2199e3cc21454571248d45ae::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita9da643d2199e3cc21454571248d45ae::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}