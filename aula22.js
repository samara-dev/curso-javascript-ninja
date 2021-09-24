(function() {
    'use strict';
    // criando 2 objetos com duas pessoas.
    var samara = {
        name: 'Samara', 
        lastName: 'Santos'
    };
    var rafael = {
        name: 'Rafael', 
        lastName: 'Barreto'
    };

    // Criando uma função para mostrar os nomes completos de 2 pessoas.
    console.log('O nome das pessoas é:');
    function getFullName() {
        return this.name + ' ' + this.lastName;
    }
    console.log(getFullName.call(samara));
    console.log(getFullName.call(rafael));

    function sum() {
        console.log(arguments);
        return Array.prototype.reduce.call(arguments, function(accumulated, actualItem) {
            return +accumulated + +actualItem;
        });
    }

    console.log('\nSomar alguns números:');
    console.log(sum(1, 2, 3));
    console.log(sum(2, 8, 9, 7, 5));
    console.log(sum(4, 8, 6, 9));

    var userEntry = prompt('Entre com alguns números que serão somados:');
    console.log('\nEntrada do usuário:');
    console.log(userEntry);

    console.log('\nFunção que limpa entrada do usuário (somente números):');
    function justNumbers(entry) {
        return entry.replace(/\D+/g, ',').split(',');
    }

    console.log('\nEntrada do usuário limpa. Somente números:');
    var numbers = justNumbers(userEntry);
    console.log(numbers);

    console.log('\nSomar números entrados pelo usuário:');
    console.log(sum.apply(sum, numbers));
    

})();