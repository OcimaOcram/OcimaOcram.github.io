<?php
// Verifica se il form è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupera i valori dal form
  $name = $_GET["name"];
  $email = $_GET["email"];
  $message = $_GET["message"];
  
  // Imposta l'indirizzo email a cui inviare il messaggio
  $to = "marco.amico.lavoro@gmail.com";
  
  // Imposta il soggetto dell'email
  $subject = "Nuovo messaggio dal modulo di contatto";
  
  // Crea l'intestazione dell'email
  $headers = "From: $name <$email>" . "\r\n";
  
  // Invia l'email
  mail($to, $subject, $message, $headers);
  
  
  exit();
}
?>
