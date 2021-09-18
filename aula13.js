/*var repetir = 'S';

while (repetir.toUpperCase() == 'S') {
	repetir = prompt('Deseja repetir (s = sim)?');
}

do {
	alert('Exemplo');
} while (confirm('Deseja repetir?'));*/

var listaCidades = ['Taquaritinga','Matão'];

//adicionar elementos
listaCidades.push('Jaboticabal');
listaCidades.push('Monte Alto');
listaCidades.push('Candido Rodrigues');

//remover elementos do final do array
listaCidades.pop();

//remover elementos de determinada posicao do array
listaCidades.splice(2, 1);

//alterar elementos de um array em determinada posicao
listaCidades[1] = 'Araraquara';

//exibir os elementos de um array
var auxHtml = '';
total = listaCidades.length;
for (var i = 0; i < total; i++) {
	auxHtml += listaCidades[i] +'<br />';
}
document.write(auxHtml);


var linha1 = ['a1','a2','a3'];
var linha2 = ['b1','b2','b3'];
var linha3 = ['c1','c2','c3'];
var matriz = [];
matriz.push(linha1);
matriz.push(linha2);
matriz.push(linha3);

auxHtml = '<table border="1">';
totalLinhas = matriz.length;
for (var i = 0; i < totalLinhas; i++) {
	auxHtml += '<tr>';
	for (var j = 0; j < matriz[i].length; j++) {
		auxHtml += '<td>'+ matriz[i][j] +'</td>';
	}
	auxHtml += '</tr>';
}
auxHtml += '</table>';
document.write(auxHtml);

// Objeto utilizando a abordagem literal
produto1 = {codigo: 1, nome: 'Chocolate', valor: 4.99};

// Classe
class Cliente {
	constructor(codigo, nome, endereco, telefone) {
		this.codigo = codigo;
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
	}
}

cliente1 = new Cliente(1,'José','Rua A, 100','1111-1111');
cliente2 = new Cliente(2,'Ana','Rua B, 200','2222-2222');

