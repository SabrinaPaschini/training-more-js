/*faça um programa para calcular o valor de uma viagem 
voce terá 3 variavéis, sendo elas: 
1- preço combustivel 
2- gasto do combustivel do carro por km 
3- distancia em KM da viagem 

imprima o valor que sera gasto de combustivel para realizar a viagem 

*/

let preçoCombustivel = 5.79; 
let kmPorLitro = 12; 
let distanciaPercorridaKm = 1580; 

let litrosConsumidos = distanciaPercorridaKm / kmPorLitro;
let valorGasto = preçoCombustivel * litrosConsumidos; 

console.log('o gasto por km é ' + valorGasto.toFixed(2));
