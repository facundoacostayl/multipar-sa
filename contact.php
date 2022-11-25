<?php

require "PHPMailer/Exception.php";
require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


if($_POST) {
    $name = "";
    $empresa = "";
    $telefono = "";
    $email = "";
    $mensaje = "";
    
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
    
    $oMail= new PHPMailer();
    $oMail->isSMTP();
    $oMail->Host="smtp.gmail.com";
    $oMail->Port=587;
    $oMail->SMTPSecure="tls";
    $oMail->SMTPAuth=true;
    $oMail->Username=$email;
    $oMail->Password="tupassword";
    $oMail->setFrom("tumail@gmail.com","Pepito el que pica papas");
    $oMail->addAddress("maildestino@mail.com","Pepito2");
    $oMail->Subject="Hola pepe el que pica";
    $oMail->msgHTML("Hola soy un mensaje");
    
} else {
    echo '<p>Ocurrió un error</p>';
}
