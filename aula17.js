(function() {
    'use strict'
// Expressões Regulares - Usada para manipular strings, é um tipo primitivo dentro do javascript.
// Podemos usar literais, flags e termos em expressões regulares.
// .match() - \w- pega todos os caracteres alfanuméricos.

var text = 'Manuel Marques de Souza, Conde de Porto Alegre (Rio Grande, 13 de junho de 1864 - Rio de Janeiro, 18 de julho de 1875), apelidadi de "O Centauro de Luvas", foi um militar, político, abolucionista e monarquista brasileiro.';

console.log('Adicionando seu nome no texto:');
console.log(text.replace(/Manuel Marques de Souza/g, 'Samara Barreto'));

console.log('\nTrocando naturalidade:');
console.log(text.replace(/brasileiro/g, 'paulista'));

console.log('\nTrocando números por -:');
console.log(text.replace(/\d/g, '-'));

console.log('\nTrocando de "D" a "h" por "0":');
console.log(text.replace(/[D-Hd-h]/g, 0));

console.log('\nTrocando "A" e "a" por "4":');
console.log(text.replace(/a/gi, 4));

console.log('\n"O Centauro de luvas" em caixa alta:');
console.log(text.replace(/O Centauro de Luvas/g, function(phrase) {
    return phrase.toUpperCase();
}));

console.log('\nMeses representados por números:');
function getMonthNumber(monthName) {
    var months = {
        janeiro: '01',
        fevereiro: '02',
        'março': '03',
        abril: '04',
        maio: '05',
        junho: '06',
        julho: '07',
        agosto: '08',
        setembro: '09',
        outubro: '10',
        novembro: '11',
        dezembro: '12'
    };
    return months[monthName];
}
console.log('O mês de março é representado pelo número ' + getMonthNumber('março'));
console.log('O mês de setembro é representado pelo número ' + getMonthNumber('setembro'));
console.log('O mês de dezembro é representado pelo número ' + getMonthNumber('dezembro'));

console.log('\nRegex que vai fazer o match com as datas do texto:');
var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;
console.log(regexDate);

console.log('\nReplace de datas:');
function replaceDate(regex, day, month, year) {
    return day + '/' + getMonthNumber(month) + '/' + year;
}
console.log(text.replace(regexDate, replaceDate));


})();