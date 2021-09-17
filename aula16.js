(function() {
    'use strict';
 // 'use strict'; - É uma diretiva usada dentro da IIFE, dizendo que tudo 
 // que está dentro dele estará em escopo restrito.
 // Não permite criar variáveis sem o var.
 //------------------------------------------------------------------------
 // with - Serve para diminuir o tamanho de chamadas de um objeto. Não é permitido
 // no modo 'use strict'.
 //-------------------------------------------------------------------------
 // window - É atribuído as variáveis globais.
 //-------------------------------------------------------------------------
 // delete - É usado para deletar a propriedade de objetos, porém também não
 // pode ser usado no 'use strict'.
 //-------------------------------------------------------------------------
 // argumentos de funções devem ter nomes diferentes no use strict.
 //-------------------------------------------------------------------------
 // objeto string
 // propriedades dele: length - Conta a quantidade de caracteres do objeto.
 //                    charAt() - Pega um valor da string.
 //                    concat() - Cria uma nova string e concaneta.
 //                    .indexOf(string) - Verifica se existe um valor dentro da string.
 //                    .replace() - Faz a troca de um caracter, sem mudar a string principal.
 //                    .slice(index inicial, index final) - Pega uma parte da string. Criando uma  nova string.
 //                    .splice(index inicial, limite) - Quebra uma string e tranforma em um array, 
 //                    criando um novo array, sem modificar o principal.
 //                    .substring() - Consegue pegar uma strin do final para o início.
 //                    .tolowerCase() - faz toda a string ficar em caixa baixa(letra minúscula).
 //                    .to UpperCase() - faz toda a string ficar em caixa alta(letra maiúscula).
 //----------------------------------------------------------------------------

 // Criando uma variável com meu nome e mostrando no console todas letras do
 // meu nome separadamente.
 console.log('As letras do seu nome:');
 var name = 'Samara';
 for(var i = 0, len = name.length; i < len; i++) {
     console.log(name.charAt(i) + ' é a ' + (i + 1) + ' letra do meu nome.');
    }
     
    // Criando uma variável que recebe meu nome completo, escrito em 
    // em formato de slug(caixa baixa e palavras separadas por um traço).
    // Fazendo a primeira letra de cada nome ficar maiúscula, e trocar o 
    // traço por um espaço. O código deve funcionar para qualquer nome.
    // Mostrar no console o nome no formato slug e o resultado final.
    console.log('\nNome convertido a partir de um slug:')
    var fullName = 'samara-dos-santos-soares-barreto';
    var newFullName = fullName.split('-').map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');
    console.log(fullName);
    console.log(newFullName);

    // Criando um array com 5 nomes e reduzindo os nomes em uma única string, separando
    // cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve ser um 'e'.
    // No final, concatenando com a frase: ' são meus amigos.'.
    // O código funciona para um array de qualquer tamanho.
    console.log('\nMeus amigos:');
    var amigos = ['Iara', 'Sabrina', 'Suelen', 'Ieda', 'Rafael'];
    var newAmigos = amigos.reduce(function(acumulado, atual, index) {
        var separator = amigos.length - 1 === index ? ' e ' : ', ';
        return acumulado + separator + atual;
    }).concat(' são meus amigos.');
    console.log(newAmigos);

    // Usando o replace(), para fazer a string Roberto virar Roberta.
    console.log('\nEra Roberto, agora é:');
    console.log('Roberto'.replace('to', 'ta'));

    // Mostrando no console a parte "nando" da string "Fernando". 
    // Fazendo a busca do final para o início da string.
    console.log('\nParte de uma string:');
    console.log('Fernando'.substring(8, 3));

    // Declarando uma variável que recebe meu primeiro nome escrito normal.
    // Mostrando no console meu nome, intercalando as letras entre maiúsculas e minúsculas.
    // Fazendo o código funcionar igualmente para qualquer nome.
    console.log('\nNome com letras intercaladas entre caixa alta e caixa baixa:');
    var myName = 'Samara';
    var myNewName = [];
    for(var i = 0, len = myName.length; i < len; i++) {
        myNewName.push(i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase());
    }
    console.log(myNewName.join(''));

})();

