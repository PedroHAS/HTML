window.onload = () => {
	document.getElementById('btnExibirNome').onclick = () => {
		let nome = document.getElementById('txtNome').value;
		alert(nome);
	}
}