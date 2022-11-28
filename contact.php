<?php

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

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

    if(mail($recipient, "Multipar Web", $mensaje, $headers)) {
      echo "<p>Gracias por contactarnos, $visitor_name. Obtendrás una respuesta en las próximas horas.</p>";
  } else {
      echo '<p>Ocurrió un error. Intenta nuevamente o contáctanos a través de nuestros otros medios de comunicación.</p>';
  }
    
} else {
    echo '<p>Ocurrió un error</p>';
}
