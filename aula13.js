(function() {
// .push() - adiciona um ítem no final do array
// .pop() - remove o último ítem do array.
// .unshift() - adiciona um ítem no início do Array.
// .shift() - remove o primeiro ítem do array.
// .slice(passando aqui os índices a serem retornados) - retorna um pedaço do array e não modifica o array principal.
// .concat() - concatena novos valores ao array.
// .splice(passando índice de início e a quantidade de ítens a ser excluídos) - remove ou adiciona um pedaço do array, modificando o array principal.
// .forEach(function(item, index, array) {}) - funciona como a estrutura for.
// podendo ser passado também só o que for utilizar.

// .every(function(item) {}) - testa todos os ítens do array para fazer verificações, tendo que ser todos true.
// .some(function(item) {}) - testa os ítens do array, onde pelo menos um ítem tem que ser true.
// .map(function(item, index, array) {}) - percorre todos os ítens do array, retornando um novo array com os novos valores.
// .filter(function(item, index, array) {})) - filtra os ítens do array.

var arr = [1, 2, 3, 4, 5];
console.log('O array em formato de string é:');
console.log(arr.toString());

var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
var sudeste = ['Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

console.log('\nAlguns Estados do Brasil:');
var brasil = sul.concat(sudeste); // concatenando os dois arrays.
console.log(brasil);

console.log('\nMais estados adicionados:');
brasil.unshift('Acre', 'Amapá', 'Amazonas'); // adicionando ítens no início do array.
console.log(brasil);

console.log('\nEstados removidos: ');
console.log(brasil.shift()); // removendo o primeiro ítem do array.

var newSul = brasil.slice(2, 5); // criando um novo array e adicionando a ele uma parte do array brasil.

console.log('\nEstados do Sul do Brasil:');
console.log(newSul);
console.log(brasil);

var nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Sul', 'Sergipe'];
console.log('\nEstados do Nordeste:');
console.log(nordeste);

var newSudeste = brasil.splice(5, 4); // removendo ítens do array brasil e colocando em uma nova variável.
console.log(newSudeste);

brasil = brasil.concat(nordeste); // adicionando o array nordeste no array brasil, deixando-os no mesmo array.

console.log('\nEstados em newSudeste:');
console.log(newSudeste);

console.log('\nAlguns Estados do Brasil:');
console.log(brasil);

var newBrasil = [];
// percorrendo o array brasil e fazendo ele ser mostrado como objeto no console.
brasil.forEach(function(item, index) {
    newBrasil.push({
        id: index,
        estado: item
    });
});

console.log('\nnewBrasil:');
console.log(newBrasil);

console.log('\nTodos os estados de brasil tem mais de 7 letras?');
// verificando se todos os ítens do array tem mais de 7 letras.
// &&
var every = brasil.every(function(item) {
    return item.length > 7;
});
console.log(every ? 'Sim, todos os estados tem mais de 7 letras!' : 'Nem todos os estados tem mais de 7 letras!');

console.log('\nCeará está incluido em brasil?');
// verificando se pelo menos 1 ítem do array é igual a 'Ceará'.
// ||
var some = brasil.some(function(item) {
    return item === 'Ceará';
});
console.log(some ? 'Ceará está incluído!' : 'Ceará não foi incluído!');

// utilizando o método map(), para percorrer o array newBrasil,
// e somar + 1 ao id de cada objeto, e adicionar uma frase
// na propriedade estado. Atribuindo um novo array a uma variável chamada map. 
var map = newBrasil.map(function(item, index) {
    return {
        id: item.id++,
        estado: item.estado += ' pertence ao Brasil'
    };
});
console.log('\nnewBrasil agora com mais informações:');
console.log(map);

// filtrando o array criado acima, retornando somente
// os estados que tiverem índice par e atribuindo a uma 
//variável chamada filter.
var filter = map.filter(function(item, index) {
    return item.id % 2 === 0;
});
console.log('\nEstados com ID par:');
console.log(filter);

})();