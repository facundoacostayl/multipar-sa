<?php

if($_POST) {
    $name = "";
    $empresa = "";
    $telefono = "";
    $email = "";
    $mensaje = "";

    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $secretkey = "6Ld3pTwjAAAAAAQR0amDrWAwRG745f72UcpJjNR5";

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&
    response=$captcha&remoteip=$ip");

    $attributes = json_decode($response, TRUE);

    $errors = array();

    if(!$attributes['success']) {
        $errors[] = "Verificar captcha";
    }
    
    if(isset($_POST['name'])) {
      $name = filter_var($_POST['name'], FILTER_UNSAFE_RAW);
    }
    
    if(isset($_POST['empresa'])) {
    	$empresa = filter_var($_POST['empresa'], FILTER_UNSAFE_RAW);
    }

    if(isset($_POST['email'])) {
    	$email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
    	$email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    
    if(isset($_POST['mensaje'])) {
    	$mensaje = htmlspecialchars($_POST['mensaje']);
    }

    $recipient = "facundoacostayl@gmail.com";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

    $mail = mail($recipient, "Multipar Web", $mensaje, $headers);
}