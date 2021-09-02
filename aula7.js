// array com 5 elementos de tipos diferentes

var arr = ['Fernando', function() {}, {bola: 'azul'}, 50, [1, 2, 3] ];

// adicionando ítens ao array com o método push

function addItem(item) {
    arr.push(item);
    return arr;
}

console.log(addItem(['Samara', 32, true]));

// mostrando o segundo elemento do segundo array criado

console.log('O segundo elemento do segundo array é ' + arr[5][1]);

console.log('O primeiro array tem ' + arr.length + ' itens.');

console.log('O segundo array tem ' + arr[5].length + ' ítens.');

console.log('Números pares entre 10 e 20:');
var num = 10;
while(num <= 20) {
    num % 2 === 0 ? console.log(num) : '';
    num++;
}

console.log('Números ímpares entre 10 e 20:');
var num = 10;
while(num < 20) {
    num % 2 !== 0 ? console.log(num) : '';
    num++;
}

console.log('Números pares entre 100 e 120:');
for(num = 100; num <= 120; num++) {
    num % 2 === 0 ? console.log(num) : '';
}

console.log('Números ímpares entre 111 e 125:');
for(num = 111; num <= 125; num++) {
    num % 2 !== 0 ? console.log(num) : '';
}

