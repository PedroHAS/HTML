var numero = prompt('Informe um número <= 10:');

if (!isNaN(numero)) {
	while (numero <= 10) {
		console.log('while:'+ numero);
		numero++;
	}

	do {
		console.log('do:'+ numero);
		numero++;
	} while (numero <= 10);

	for (var i = 0; i <= 10; i++) {
		console.log('for:'+ i);	
	}

	for (item in document) {
		console.log(item);
	}
}