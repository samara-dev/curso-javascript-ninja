(function() {
// JS no browser

// this - aponta para o objeto onde ele está dentro, é uma referência ao objeto.
// Quando ele aparece dentro de funções, pode ter 2 valores.
//--------------------------------------------------------------------------------
// window - é um objeto global dentro do browser.
//--------------------------------------------------------------------------------
// arguments - retorna os argumentos passados para a função.

// Criando uma função construtora adicionando 3 parâmetros,
// 3 propriedades e 3 métodos. 
function Person(name, lastName, age) {
    // propriedades
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    // métodos
    this.getFullName = function getFullName() {
        return this.name + ' ' + this.lastName;
    }
    this.getAge = function getAge() {
        return this.age;
    }
    this.addAge = function addAge() {
        this.age += arguments[0];
        return this;
    }
}


// Criando 3 novos objetos usando o construtor criado acima.// Mostrando no console separadamente cada pessoa.
console.log('Novas pessoas criadas à partir de Person:');
var samara = new Person('Samara', 'Santos', 32);
var rafael = new Person('Rafael', 'Barreto', 35);
var maria = new Person('Maria', 'Eduarda', 1);
console.log(samara);
console.log(rafael);
console.log(maria);

// Mostrando os nomes completos das pessoas acima 
console.log('\nNomes das pessoas:');
console.log(samara.getFullName());
console.log(rafael.getFullName());
console.log(maria.getFullName());

// mostrando o nome completo e idades de cada pessoa no console.
console.log('\nIdade das pessoas:');
console.log(samara.getFullName() + ' tem ' + samara.getAge() + ' anos.');
console.log(rafael.getFullName() + ' tem ' + rafael.getAge() + ' anos.');
console.log(maria.getFullName() + ' tem ' + maria.getAge() + ' anos.');

// adicionando alguns anos a cada pessoa e mostrando no console.
console.log('\nNova idade das pessoas:');
console.log(samara.getFullName() + ' agora tem ' + samara.addAge(2).getAge() + ' anos.');
console.log(rafael.getFullName() + ' agora tem ' + rafael.addAge(-2).getAge() + ' anos.');
console.log(maria.getFullName() + ' agora tem ' + maria.addAge(4).getAge() + ' anos.');

})();