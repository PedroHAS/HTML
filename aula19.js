class Calculo {
	constructor(valorEtanol, valorGasolina) {
		this.valorEtanol = valorEtanol;
		this.valorGasolina = valorGasolina;
	}
	calcular() {
		return this.valorEtanol / this.valorGasolina;
	}
}

function verificarTecla(evento) {
	/*for (item in evento)
		console.log(item);*/	
	if (evento.keyCode < 46 || evento.keyCode > 57 ||	evento.keyCode == 47) {
		evento.preventDefault();
		alert('Tecla inválida!');
	}
}

window.onload = () => {
	document.getElementById('txtEtanol').onkeypress = (evento) => 
		verificarTecla(evento);

	document.getElementById('txtGasolina').onkeypress = (evento) =>
		verificarTecla(evento);

	document.getElementById('btnCalcular').onclick = () => {
		let valorEtanol = document.getElementById('txtEtanol').value;
		let valorGasolina = document.getElementById('txtGasolina').value;
		valorEtanol = parseFloat(valorEtanol);
		valorGasolina = parseFloat(valorGasolina);
		let calculo = new Calculo(valorEtanol, valorGasolina);
		alert(calculo.calcular());
	}
}