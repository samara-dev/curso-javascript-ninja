(function() {
    function myFunction() {
        var number1 = 10;
        var number2 = 20;
        console.log('Na função myFunction, o primeiro número é ', number1);
        console.log('Na função myFunction, o segundo número é ', number2);
        return number1 + number2;
    }
    
    myFunction();

    function myFunction2() {
        var number1 = 10;
        var number2 = 20;
        var sum = function sum() {
            return number1 + number2;
        };
        console.log('A soma de 10 e 20 é igual a ', sum ? sum() : undefined);
        return sum;
    }

    myFunction2();

    function myFunction3() {
        function sum() {
            return number1 + number2;
        }
        var number1 = 40;
        var number2 = 50;
        console.log('A soma de 40 e 50 é igual a ', sum());
        console.log('Na função myFunction3, number1 é igual a ', number1);
        return sum();
    }

    myFunction3();

    function calculator(n1, n2) {
        return function(callback) {
            return callback(n1, n2);
        };
    }

    var sum = calculator(8, 2);

    console.log('O resultado da soma é:');
    console.log(sum(function(n1, n2) {
        return n1 + n2;
    }));

    var subtraction = calculator(10, 4);
    var multiplication = calculator(2,2);
    var division = calculator(20, 4);
    var mod = calculator(15, 2);

    console.log('O resultado da subtração é:');
    console.log(subtraction(function(n1, n2) {
        return n1 - n2;
    }));
    console.log('O resultado da multiplicação é:');
    console.log(multiplication(function(n1, n2) {
        return n1 * n2;
    }));
    console.log('O resultado da divisão é:');
    console.log(division(function(n1, n2) {
        return n1 / n2;
    }));
    console.log('O resto da divisão é:');
    console.log(mod(function(n1, n2) {
        return n1 % n2;
    }));
    
})();