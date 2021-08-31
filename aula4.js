carro.adicionarPessoas = function(x) {
	var totalPessoas = carro.quantidadePessoas + x;
	if(carro.assentos === carro.quantidadePessoas) {
		return 'O carro já está lotado';
	}
	if(totalPessoas > carro.assentos) {
		var quantosCabem = carro.assentos - carro.quantidadePessoas;
		var singularOuPlural = quantosCabem === 1 ? 'pessoa' : 'pessoas';
		return 'Só cabem mais ' + quantosCabem + singularOuPlural +'!';
	}
	carro.quantidadePessoas += x;
	return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
}