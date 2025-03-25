<?php

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
	$name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Ops! Houve um problema com sua submissão. Por favor, complete o formulário e tente novamente.";
        exit;
    }

    // Update this to your desired email address.
    $recipient = "kabulahomestudio@gmail.com";
	$subject = "Message from $name";

    // Email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message: $message\n";

    // Email headers.
    $email_headers = "From: $name <$email>\r\nReply-to: <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Obrigado! Sua mensagem foi enviada.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Ops! Algo deu errado e não conseguimos enviar sua mensagem.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "Houve um problema com sua submissão, por favor tente novamente.";
}