(function(window, document) {
    'use strict';
    // alert() - Retorna uma mensagem na tela.
    // confirm() - retorna um booleano.
    // prompt() - Entrada de dados.
    // window - representa a janela do browser.
    // getElementById() - pega um elemento através do id.
    // getElementsByClassName() - pega uma elemento a partir de uma classe.
    // getElementsByTagName() - pega elementos através de tags.
    // getElementsByName() - pega elementos através do nome.

    // Não causam efeitos colaterais:
    // document.querySelector() - faz a seleção do primeiro elemento a partir de uma estrutura css.
    // document.querySelectorAll() - faz a seleção de todos os elementos a partir de uma estrutura css.
    

    // Ao carregar a página, pergunte ao usuário "Qual o seu nome?".
    // Atribua o resultado a uma variável chamada 'username'.
    // Se o usuário não digitar um nome, 'username' deve receber "Desconhecido".
    // Com a resposta, mostre um alert com a mensagem "Bem vindo [username]!"
    var username = prompt('Qual o seu nome') || 'Desconhecido';
    alert('Bem vindo ' + username + '!');

    // Agora pergunte ao usuário "Qual seu e-mail?", atribuindo a
    // uma variável chamada 'email'.
    var email = prompt('Qual seu e-mail?');

    // Selecione o input de "Nome", atribuindo-o à uma variável
    // chamada '$inputUsername'.
    var $inputUsername = document.querySelector('input[type="text"]');

    // Selecione o input de "Email", atribuindo à uma variável
    // chamada '$inputEmail'.
    var $inputEmail = document.querySelector('input[type="email"]');

    // Selecione o campo de "Mensagem", atribuindo-o à uma variável
    // chamada $message.
    var $message = document.querySelector('textarea');

    // Selecione o botão de envio do formuário, atribuindo-o à uma
    // variável chamada '$button'.
    var $button = document.querySelector('button');

    // Preencha os campos de "Nome" e "Email" que estão no documento
    // com os valores entrados pelo usuário.
    $inputUsername.value = username;
    $inputEmail.value = email;

    /* Adicione um listener de evento de click ao botão que faça o
     seguinte:
     1. Verificar se todos os campos estão preenchidos:
     - Mostrar um alert para cada campo não preenchido, como
     abaixo:
     Se o campo de "Nome" não estiver preenchido, mostrar:
      - "Preencha o nome do usuário!"
     Se o campo de "Email" não estiver preenchido, mostrar:
      - "Preencha o e-mail!"
     Se o campo de "Mensagem" não estiver preenchido, mostrar:
      - "Preencha a mensagem!"
     Se o campo de "Email" for inválido, mostrar:
     - "Entre com um e-mail válido!"
     2. Para verificar se o e-mail é válido use a função
     'isValidEmail', passando o e-mail que foi entrado no
     campo de "Email" por parâmetro. (A função 'isValidEmail'
     será criada logo abaixo).
     3. Se tudo estiver ok, pergunte ao usuário
      - "Tem certeza que deseja enviar o formulário?"
     Se for confirmado, mostre um alerta com a mensagem:
      - "Enviado com sucesso!"
     Caso contrário, mostre um alerta com a mensagem:
      -"Não enviado."
    */
    $button.addEventListener('click', function(event) {
        event.preventDefault();// previne a ação padrão do navegador
        if(!$inputUsername.value)
            return alert('Preencha no nome do usuário!');
        if(!$inputEmail.value)
            return alert('Preencha o e-mail!');
        if(!isValidEmail($inputEmail.value))
            return alert('Entre com um e-mail válido!');
        if(!$message.value)
            return alert('Preencha a mensagem!');
        if(!confirm('Tem certeza que deseja enviar o formulário?'))
            return alert('Não enviado.');
        return alert('Enviado com sucesso!');
    }, false);

    /* 
    Crie uma função chamada 'isValidEmail', que será usada na
     validação do envio do formulário.
     Essa função deve receber o e-mail por parâmentro e verificar
     se é um e-mail válido.
     As regras para validação são:
        - O nome do usuário (antes do arroba), pode ser qualquer
        caractere alfanumérico, incluindo o underscore, sinal de "+"
        e o ponto;
        - Após o arrobba, o domínio pode conter somente caracteres
        alfanuméricos e o underscore;
        - Para a extensão, o domínio deve vir seguido de um ponto,
        e no mínimo 2 caracteres alfanuméricos;
        - O final do domínio é opcional, mas se existir, deve começar
        com um ponto, seguido de no máximo 2 caracteres alfanuméricos.

        Alguns e-mails válidos que podem ser usados para testar:
            - "meu.email+categoria@gmail.com"
            - "juca_malandro@bol.com.br"
            - "pedrobala@hotmail.uy"
            - "sandro@culinaria.dahora"

        Alguns e-mails inválidos:
            - "walter-da-silva@maraca.br"
            - "rita-marica@titica.a.b"
            - "agua_@evida.br.com"
    */
   function isValidEmail(email) {
       return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
   }
    


})(window, document);