<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone=$_POST["phone"];
  $message = $_POST["message"];

  // Set up email
  $to = "khaniyahiral@gmail.com"; 
  $subject = "New message from $name";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // Build email body
  $body = "<p>Name: $name</p>";
  $body .= "<p>Email: $email</p>";
  $body .="<p>Phone: $phone </p>";
  $body .= "<p>Message: $message</p>";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    alert("Message sent successfully") ;
  } else {
   alert("Message failed");
  }
}

?>
