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
const formaDePagamento = 40;

if (formaDePagamento === 1) {
    let valorDescontoDebito = precoEtiqueta * 10 / 100
    console.log(precoEtiqueta - valorDescontoDebito);
} else if (formaDePagamento === 2) {
    let valorDescontoPix = precoEtiqueta * 15 / 100
    console.log(precoEtiqueta - valorDescontoPix);
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
    let valorComJuros = precoEtiqueta * 10 / 100;
    console.log(valorComJuros + precoEtiqueta);
}else {
    console.log('Escolha uma opção de pagamento válida.')
}


