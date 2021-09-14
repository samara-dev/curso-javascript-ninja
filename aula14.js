(function() {
// .reduce(function(acumulado, atual, index, array) {}, 0) - reduz ítens do array Não mofifica o array principal, não retorna array.
// .reduceRigth(function(acumulado, atual, index, array) {}, 0) - faz o mesmo que o reduce, porém da direita para a esquerda.
// .indexOf() - procura do início para o fim do array se um valor existe no index do array e em qual posição ele está.
// .lastIndexOf() - igual ao indexOf(), porém procura do final para o início
// Array.isArray(arr) - verifica se é array ou não.

// criando um array  e inserindo os objetos dentro do array
// no formato {number: [number]}.
console.log('Number Objects Array:');
var numberObjects = [];
for(var i = 1; i <= 10; i++) {
    numberObjects.push({number: i});
}
console.log(numberObjects);

// criando um array que terá somente os números do array
// criado acima e mostrando no console.
console.log('\nJust Numbers:');
var justNumbers = numberObjects.map(function(item) {
    return item.number;
});
console.log(justNumbers);

// criando um array que irá receber do array criado acima
// somente os números que forem divisíveis por 2 ou 3. E
// mostrando no console.
console.log('\nJust module of division by 2 or 3:');
var justMod2Or3 = justNumbers.filter(function(item) {
    return item % 2 === 0 || item % 3 === 0;
});

console.log(justMod2Or3);

// criando um novo array que receba do array anterior um
// valor reduzido pela operação: somar 1 ao último valor
// retornado, multiplicar o resultado pelo valor atual.
// O cálculo deve começar com zero. E mostrar o resultado
// no console.
console.log('\nOperation:');
var operation = justMod2Or3.reduce(function(acumulado, atual) {
    return (acumulado + 1) * atual;
}, 0);
console.log(operation);

console.log('Operation 2:');
var operation2 = justMod2Or3.reduceRight(function(acumulado, atual) {
    return (acumulado + 1) * atual;
}, 0);
console.log(operation2);

console.log('\nSeu nome na lingua do "P":');
var name = ['Sa', 'ma', 'ra'];
var reduceP = name.reduce(function(acumulado, atual) {
    return acumulado + 'P' + atual;
}, '');
console.log(reduceP);

console.log('\nInversed Name:');
var inversedName = name.reduceRight(function(acumulado, atual) {
    return acumulado + atual;
});
console.log(inversedName);


console.log('\nNumber objects:');
console.log(numberObjects);


console.log('\nExiste um { number: 2 } em numberObjects?');
var obj = numberObjects[1];
if(numberObjects.indexOf(obj) > -1 ) {
    console.log('Existe um { number: 2 } em numberObjects!');
} 
else {
console.log('Não existe um { number: 2 } em numberObjects!');
};

console.log('\nE buscando a partir do último índice, o { number: 2 } existe?');
if(numberObjects.lastIndexOf({number: 2}, 2) > -1 ) {
    console.log('Existe um { number: 2 } em numberObjects!');
} 
else {
console.log('Não existe um { number: 2 } em numberObjects!');
};

console.log('\njustMod2Or3 é um array? se for, a representação dele em String é:');
if(Array.isArray(justMod2Or3)) {
    console.log(justMod2Or3.toString());
}

})();