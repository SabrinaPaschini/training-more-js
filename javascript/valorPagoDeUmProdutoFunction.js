/*
Elabrore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta 
e a escolha da condição de pagamento. 
Utilize os codigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o calculo adequado.

Codigo condição de pagamento:
-A vista Debito, 10% de desconto.
-A vista no dinheiro ou PIX, 15% desconto.
-Em duas vezes, preço normal de etiqueta, sem juros
-Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/


const precoEtiqueta = 100;
const formaDePagamento = 2;

function aplicarDesconto(valor, desconto) {

    return (valor - (valor * desconto / 100));
}

function aplicarjuros(valor, juros) {
    return (valor + (valor * juros / 100));
}
if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
    let valorComJuros = precoEtiqueta * 10 / 100;
    console.log(aplicarjuros(precoEtiqueta, 10));
} else {
    console.log('Escolha uma opção de pagamento válida.')
}


