(function() {
    'use strict'
    // Continuação expressões Regulares
    // ^ - Representa início de string.
    // $ - Representa fim de string.
    // flag m (multiline) - Faz a captura de mais de uma linha.
    // i - Representa ignore case.
    // ? - se utilizado após o repetidor, faz uma captura não gulosa.
    // E se usado com caracter, faz uma captura gulosa.
    // (?:) - Somente agrupamento, sem capturar.
    // \1, \2 - Referência dentro do regex.
    // \ - Serve para escapar um caracter.

    // Métodos de string que pode usar regex:
    // .match() - Retorna um array com os matchs ou null.
    // .replace(regexp, string)
    // .split(regexp)
    //.search(regex)

    // Construtor de expressões regulares:
    // RegExp()

    console.log('Regex para números usando o construtor:');
    var justNumberRegex = new RegExp('^\\d+', 'gm');
    console.log(justNumberRegex);

    var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';
    console.log('\nNúmeros no início da linha do texto:\n' + text, '\n');
    console.log(text.match(justNumberRegex));

    console.log('\nRegex para números somente no final das linhas:');
    var numbersAtTheEnd = /\d+$/gm;
    console.log(numbersAtTheEnd);

    var otherText = 'Silvio Santos, nome artístico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), é um apresentador de televisão e empresário brasileiro.\n Proprietário do grupo Silvio Santos, que inclui empresas como a Liderança\n Capitalização (administradora da loteria Tele Sena), a Jequiti Cosméticos e o \n Sistema Brasileiro de Televisão (mais conhecido como SBT), Silvio Santos possui\n um patrimônio avaliado em aproximadamente 6\n bilhões de reais.';
    console.log('\nNúmeros no final da linha:\n\n', otherText, '\n');
    console.log(otherText.match(numbersAtTheEnd));

    var markup = '<main>\n <div class="container">\n <span class="text date"></span>\n <p class=\'excerpt\'></p>\n </div>\n</main>';
    console.log('\nQuais classes CSS existem na marcação abaixo?\n\n', markup, '\n');
    function hasClass(markup, cssClass) {
        var regex = new RegExp('class=["\'](?:[\\w\\s]+)?' + cssClass + '(?:[\\w\\s]+)?["\']');
        return regex.test(markup);
    }
    var classes = ['container', 'text', 'date', 'excerpt', 'main'];
    classes.forEach(function(cssClass) {
        console.log(hasClass(markup, cssClass) + ' para a classe ' + cssClass);
    });





})();