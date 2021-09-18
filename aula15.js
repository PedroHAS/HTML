function exibirLista(lista) {
	var totalElementos = lista.length;
	var auxHtml = '<ul>';
	for (let i = 0; i < totalElementos; i++) {
		auxHtml += '<li>'+ lista[i] +'</li>';
	}
	auxHtml += '</ul>';
	return auxHtml;
}

var listaNomes = ['Ana','Maria','Marcos','Jonas'];
listaNomes.push('Benedito','José');

var listaCidades = ['Taquaritinga','Jaboticabal','Monte Alto'];
listaCidades.push('Guariba','Itápolis','Matão','Araraquara');

var listaBairros = ['Centro','Jardim Esperança'];

document.write(exibirLista(listaNomes));

document.write(exibirLista(listaCidades));

document.write(exibirLista(listaBairros));