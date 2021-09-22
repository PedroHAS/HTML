
var valor1 = parseFloat(prompt('Informe o primeiro valor:'));

if(isNaN(valor1)){

    alert('Entrada invalida.');

}else{

    var operacao = prompt('Informe a operação(+, -, *, /):');

    do{

        var valor2 = parseFloat(prompt('Informe o proximo valor:'));

        if(isNaN(valor2)){
            alert('Entrada invalida.');
        }else{

            if(operacao == '+'){

                var resultado = valor1 + valor2;

            }else if(operacao == '-'){

                var resultado = valor1 - valor2;

            }else if(operacao == '*'){

                var resultado = valor1 * valor2;

            }else if(operacao == '/'){
                    
                var resultado = valor1 / valor2;

            }else{
                alert('Operação invalida.');
            }

            var operacao = prompt('Informe a operação(+, -, *, /, =):');
            valor1 = resultado;
        }

        if(operacao == '='){
            alert(resultado);
            var denovo = confirm('Deseja fazer outra conta?');

            if(denovo == true){
                operacao = '.'
                var valor1 = parseFloat(prompt('Informe o primeiro valor:'));
                var operacao = prompt('Informe a operação(+, -, *, /):');
            }
        }
    }while(operacao != '=')

}
document.write('O resultado é: '+ resultado);