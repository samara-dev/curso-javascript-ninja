// Exercííos sobre programação funcional.

var sum = function calculateSum(x, y) {
    return x + y;
};

var val1 = 2;
var val2 = 4;
console.log('A soma de ' + val1 + ' e ' + val2 + ' é igual a ' + sum(val1, val2) + '.');

console.log('O nome da função que faz a soma é ' + sum.name);

function showName() {
    return 'Samara Santos';
}

console.log(showName());

var varShowName = showName;

console.log('A função ' + varShowName.name + ' retorna ' + varShowName() + '.');

function calculator(operator) {
    return function(op1, op2) {
        var result;    
        switch(operator) {
            case '+':
                result = op1 + op2;
                break;
            case '-':
                result = op1 - op2;
                break;
            case '*':
                result = op1 * op2;
                break;
            case '/':
                result = op1 / op2;
                break;
            case '%':
                result = op1 % op2;
                break;
            default:
                return 'Operação Inválida';
        }
        
        return 'Resultado da operação: ' + op1 + ' ' + operator + ' ' + op2 + ' = ' + result + '.';
    }
    
}

console.log(calculator('+') (10, 6));
console.log(calculator('-') (10, 2));
console.log(calculator('*') (5, 4));
console.log(calculator('/') (20, 2));
console.log(calculator('%') (15, 2));

var sum = calculator('+');
console.log(sum(2, 3));

var subtraction = calculator('-');
console.log(subtraction(6, 3));

var multiplication = calculator('*');
console.log(multiplication(2, 8));

var division = calculator('/');
console.log(division(15, 3));

var mod = calculator('%');
console.log(mod(5, 2));

var teste = calculator('x');
console.log(teste(2, 8));
