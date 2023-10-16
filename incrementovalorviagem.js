/*
Faça um programa, para calcular o valor de uma viagem 
você terá 5 variáveis, sendo elas:

1.Preço etanol;
2.Preço gasolina; 
3.O tipo de combustivel que está no seu carro;
4.Gasto de combustivel do carro por KM;
5.Distância em KM da viagem; 

imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let kmPorLitros = 10;
let distanciadaViagem = 100;
let valorGastoEtanol = 0;
let valorGastoGasolina = 0;
let tipoCombustivel = 'Etanol';
let consumoLitros = distanciadaViagem / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    valorGastoEtanol = consumoLitros * precoEtanol;
    console.log('Valor gasto na viagem com etanol é: ' + valorGastoEtanol.toFixed(2));
} else {
    valorGastoGasolina = consumoLitros * precoGasolina
    console.log('Valor gasto com gasolina é : ' + valorGastoGasolina.toFixed(2));
}




