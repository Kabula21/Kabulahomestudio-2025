<?php

// Apenas processar solicitações POST.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter os campos do formulário e remover espaços em branco.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Verificar se os dados foram enviados para o remetente.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Definir um código de resposta 400 (requisição inválida) e sair.
        http_response_code(400);
        echo "Ops! Houve um problema com sua submissão. Por favor, complete o formulário e tente novamente.";
        exit;
    }

    // Simulando o envio de e-mail com sucesso, já que não podemos enviar e-mail no GitHub Pages.
    echo "Obrigado! Sua mensagem foi enviada.";

} else {
    // Se não for uma requisição POST, definir código de resposta 403 (proibido).
    http_response_code(403);
    echo "Houve um problema com sua submissão, por favor tente novamente.";
}
