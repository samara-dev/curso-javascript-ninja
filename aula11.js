(function() {

    var once = false;
    do {
        console.log('Entrou ao menos uma vez!');
    } while(once);

    var person = {
        name: 'Samara Santos',
        age: 32,
        weigth: 75,
        birthday: '21/02'
    };

    var counter = 0;
    for(var prop in person) {
        console.log('The ' + prop + ' of person é ' + person[prop]);
        counter++;
    }
    console.log('The person has ' + counter + ' properties');

    function moreThan(age) {
        return person.age > age;
    }
    console.log('The person has more than 25 years old?', moreThan(30))
    
    console.log('De 0 a 10:');
    var numbers = [];
    for(var i = 0; i < 20; i++) {
        if(i > 10) {
            break;
        }
        numbers.push(i);
    }
    console.log(numbers);

    console.log('Pares de 0 a 20:');
    numbers = [];
    for(var i = 0; i <= 20; i++) {
        if(i % 2 !== 0) {
            continue;
        }
        numbers.push(i); //puxa os números para dentro do array.
    }
    console.log(numbers);

})();