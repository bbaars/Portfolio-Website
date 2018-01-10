<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

/* create a new object */
// $mail = new PHPMailer;

$errors = '';

/* set the address you want to send the form submission to */
$to = 'brandonbaars@gmail.com';

/* checks to see if the required fields are empty */
if(empty($_POST['name']) || empty($_POST['email'] || empty($_POST['message']))) {
    $errors .= 'Error: Please fill out required fields';
} else {

    /* obtains the name, email, and message content from the form */
    $name = $_POST['name'];
    $emailAddress = $_POST['email'];
    $message = $_POST['message'];

    if(!empty($_POST['subject'])) {
        $subject = $_POST['subject'];
    } else {
        $subject = 'No Subject';
    }


    /*check for valid email */
    if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $emailAddress)) {
        $errors .= "\n Error: Invalid email address";
    }

    /* if no errors, proceed onwards */
    if(empty($errors)) {

        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = "brandonbaars.com";
        $mail->SMTPAuth = true;

        $mail->Username = "brandon@brandonbaars.com";
        $mail->Password = "waverly2011";

        /* set the from to be your own address so email recognizes it */
        $mail->setFrom('brandon@brandonbaars.com', 'Contact Form Submission');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = <<<EOT

Email: $emailAddress;
Name: $name;
Message: $message;

EOT;

        $mail->addReplyTo($emailAddress, $name);
        $mail->isHTML(false);

        /* check to see if we can send */
        if(!$mail->send()) {
            echo "<script>alert{'Message was not sent.'};</script>";
            echo 'Mailer error: ' . $mail->ErrorInfo;
        } else {
            echo "Message has been sent. Thank you for contacting us. I will get back to you momentarily";
        }
    }
}
?>