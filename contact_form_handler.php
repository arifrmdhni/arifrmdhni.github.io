<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject_email = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'portfolioarif@gmail.com';

$email_subject = "$subject_email";

$email_body = "User Name : $name.\n" .
    "User Email : $visitor_email.\n" .
    "User Message : $message.\n";

$to = "spotifypremiumgue@gmail.com";

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";

if (mail($to, $email_subject, $email_body, $headers)) {
    echo 'The Message has been sent';
} else {
    echo 'Failed sent Message';
}
