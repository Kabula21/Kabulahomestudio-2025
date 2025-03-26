$(function() {
    // Obter o formulário.
    var form = $('#ajax_form');

    // Obter a div de mensagens.
    var formMessages = $('#form-messages');

    // Configurar um ouvinte de eventos para o formulário de contato.
    $(form).submit(function(event) {
        // Impedir o envio do formulário.
        event.preventDefault();

        // Serializar os dados do formulário.
        var formData = $(form).serialize();

        // Aqui, em vez de fazer a requisição AJAX, simula-se a resposta de sucesso
        // e exibe a mensagem de confirmação para o usuário.
        
        // Forçar a exibição da mensagem de sucesso.
        $(formMessages).removeClass('alert-danger');
        $(formMessages).addClass('alert-success');
        $(formMessages).text('Obrigado! Sua mensagem foi enviada.');

        // Limpar os campos do formulário após a "submissão".
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
});
