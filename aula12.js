(function() {

    var person = {
        name: 'Rafael',
        lastname: 'Barreto',
        age: 36
    };

    console.log('Propriedades de person:');

    console.log(Object.keys(person)); //mostra todas as propriedades do objeto.

    var books = [];
    books.push({name: 'Lógica de Programação', pages: 150}); //inserindo propriedades no array.
    books.push({name: 'Algoritmo', pages: 200});
    books.push({name: 'SQL', pages: 350});

    console.log('\nLista de livros:');
    console.log(books);

    console.log('\nLivro que está sendo removido:');
    console.log(books.pop()); //removendo a última propriedade do array.

    console.log('\nAgora sobraram somente os livros:');
    console.log(books);

    books = JSON.stringify(books); //convertendo os objetos de books para string.
    console.log('\nLivros em formato string:');

    console.log(books);

    books = JSON.parse(books); //convertendo novamente para objeto.
    console.log('\nAgora os livros são objetos novamente:');
    
    //mosttrando no console todas as propriedades e valores de todos os livros no formato:
    //'[PROPRIEDADE]: [VALOR]'
    for(var i = 0; i < books.length; i++) {
        for(var prop in books[i]) {
            console.log(prop + ': ' + books[i][prop]);
        }
    }

    var myName = ['S', 'a', 'm', 'a', 'r', 'a'];
    console.log('Meu nome é:');

    console.log(myName.join('')); //juntando os ítens do array

    console.log(myName.reverse().join('')); //mostrando os ítens do array invertidos

    console.log('\nAgora em órdem alfabética:')
    console.log(myName.sort().join(''));

})();