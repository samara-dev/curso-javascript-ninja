(function() {

    var five = Number('5');
    console.log(five + ' é número?', typeof five === 'number');

    var concat = String(10) + 10;
    console.log('"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string');

    var operation = {
        '+': function(val1, val2) {
            return val1 + val2;
        },
        '-': function(val1, val2) {
            return val1 - val2;
        },
        '*': function(val1, val2) {
            return val1 * val2;
        },
        '/': function(val1, val2) {
            return val1 / val2;
        },
        '%': function(val1, val2) {
            return val1 % val2;
        }
    };

    function isOperatorValid(operador) {
        return !!operation[operador];
        
    }

    console.log(isOperatorValid('+'));
    console.log(isOperatorValid('-'));
    console.log(isOperatorValid('*'));
    console.log(isOperatorValid('/'));
    console.log(isOperatorValid('%'));
    console.log(isOperatorValid('x'));

    function calculator(operador) {
        if(!isOperatorValid(operador)) {
            return false;
        }
        return function(x, y) {
            if(typeof x !== 'number' || typeof y !== 'number') {
                return false;
            }
            return operation[operador](x, y);
        };
    }

    function showOperationMessage(operador, number1, number2) {
        return 'A operação ' + number1 + ' ' + operador + ' ' + number2 + ' = ';
    }

    function showErrorMessage(operador) {
        return 'Operação ' + operador + ' não permitida!';
    }

    var number1 = 0;
    var number2 = 0;
    var operationSignal;

    operationSignal = '+';
    var sum = calculator(operationSignal);

    if(sum) {
        number1 = 10;
        number2 = 4;
        console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2));
    }
    else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '-';
    var subtraction = calculator(operationSignal);
    if(subtraction) {
        number1 = 15;
        number2 = 5;
        console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2));
    }
    else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '*';
    var multiplication = calculator(operationSignal);
    if(multiplication) {
        number1 = 20;
        number2 = 2;
        console.log(showOperationMessage(operationSignal, number1, number2), multiplication(number1, number2));
    }
    else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '/';
    var division = calculator(operationSignal);
    if(division) {
        number1 = 40;
        number2 = 2;
        console.log(showOperationMessage(operationSignal, number1, number2), division(number1, number2));
    }
    else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '%';
    var mod = calculator(operationSignal);
    if(mod) {
        number1 = 20;
        number2 = 3;
        console.log(showOperationMessage(operationSignal, number1, number2), mod(number1, number2));
    }
    else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = 'x';
    var qualquer = calculator(operationSignal);
    if(qualquer) {
        number1 = 10;
        number2 = 8;
        console.log(showOperationMessage(operationSignal, number1, number2), qualquer(number1, number2));
    }
    else {
        console.log(showErrorMessage(operationSignal));
    }




})();