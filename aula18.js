(function() {
    'use strict'
    // Continuação Expressões Regulares
    // .match(\s) - representa os caracteres de espaço em branco
    //         \n - representa quebra de linha.
    //         \t - representa tabulação.
    //          g - representa global
    //          . - representa todos os caracteres que não seja quebra de linha.
    //         [] - representa lista.
    //         () - representa grupo.
    // [^abc] - representa negação e significa que o match deve ser feito com qualquer item, menos com os da lista - a, b ou c. 
    // negação com \W - nega todos os caracteres que não são alfanumérico.
    // negação com \D - pega qualquer caracter que não seja números.
    // negação com \S - pega todos os caracteres, menos os espaços em branco.
    // Repetidores de intervalo - São representados pelas {n, m}, ítem anterior ao menos n vezes, e no máximo m vezes.
    // Repetidores de intervalo aberto - São representados por {n,}, ítem anterior n ou mais vezes.
    // {4} - Representa exatamente a quantidade de ítens que eu quero pegar.
    // ? - Representa opcional. Zero ou uma ocorrência do ítem anterior.
    // + - Representa uma ou mais ocorrências do ítem anterior.
    // * - Representa zero ou mais ocorrências do ítem anterior.


    console.log('Limpando CPFs:');
    function cleanCPF(cpf) {
        return cpf.replace(/\D/g, '');
    }
    var cpfs = [
        '049-214-3421-1',
        '210.458.522-05',
        '735 500 794 - 22',
        '101.123-131x32'
    ];
    cpfs.forEach(function(cpf) {
        console.log(cleanCPF(cpf));
    });

    console.log('\nFormatando os CPFs corretamente:');
    cpfs.forEach(function(cpf) {
        console.log(cleanCPF(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'))

    });

    console.log('\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":');
    console.log('Os meses de janeiro, junho e julho começam com a letra j.'.match(/ju[nl]ho/g));

    console.log('\nMatch com a abertura de uma tag HTML:');
    console.log('<div><section><blockquote>Texto <img /> </blockquote></section></div>'.match(/<\w+>/g));

    console.log('\nMatch com tags HTML vazias (abertura e fechamento da tag):');
    console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/<\w+><\/\w+>/g));

    console.log('\nFazer replace dos textos das tags:');
    console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'
    .replace(/<(\w+)>([^<]+)<\/\w+>/g, '<$1>O texto dentro da tag "$1" é "$2"</$1>\n'));
    
    

})();