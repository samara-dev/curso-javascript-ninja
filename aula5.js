/*
Crie uma variável, que receba um array com alguns valores aleatórios - ao menos 5 - (fica por sua conta os valores do array). 
*/

var myArray = ['Samara', 32, null, {a: 1}, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmentros: o primeiro, um array de 
valores, e o segundo, um número. A função deve retornar um índice do 
array que foi passado no primeiro parâmetro. O índice a ser retornado,
deve ser o número passado no segundo parâmentro.
*/

function twoArgs(arr, x) {
	return arr[x];
}

/*
Declare uma variável que recebe um array com 5 valores, 
de tipos diferentes.
*/

var array5 = ['Rafael', 35, true, [1, 'Karla', null], {a: 'azul', b: 'rosa'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os
valores do último array criado.
*/

console.log(twoArgs(array5, 0));
console.log(twoArgs(array5, 1));
console.log(twoArgs(array5, 2));
console.log(twoArgs(array5, 3));
console.log(twoArgs(array5, 4));

/*
Crie uma função chamada 'book', que recebe um parâmetro, que 
será o nome do livro. Dentro dessa função, declare uma variável que
recebe um objeto com as seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- 'quantidadePaginas' - Number (quantidade de páginas)
- 'autor' - String
- 'editora' - String
- A função deve retornar o objeto referente ao livro passado por 
parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com
todos os livros.
*/

function book(nomeLivro) {
	var livros = {
		'Redes de Computadores': {
			'quantidadePaginas': 624,
			'autor':  'Nick Feamster e David Wetherall Andrew Tanenbaum',
			'editora': 'Bookman'
		},
		'Lógica de Programação': {
			'quantidadePaginas': 173,
			'autor': 'Adriano Almeida',
			'editora': 'Casa do Código'
		},
		'JavaScript: O Guia Definitivo': {
			'quantidadePaginas': 1.080,
			'autor': 'David Flanagan',
			'editora': 'Bookman'
		}
	};

	return !nomeLivro ? livros : livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um 
livro qualquer, usando a frase:
'O livro [NOME_DO_LIVRO] tem [X] páginas!'
*/

var bookName = 'Redes de Computadores';
console.log('O livro '+ bookName +' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando a frase:
'O autor do livro [NOME_DO_LIVRO]  é [AUTOR].'
*/

console.log('O autor do livro '+ bookName + ' é ' + book(bookName).autor + '.');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando a frase:
'O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA].'
*/

console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');