/* Elaborar algoritimo IMC. 

Calculo IMC = peso / (altura*altura);


Imc em adultos Condição:
-Abaixo de 18.5 abaixo do peso;
-Entre 18.5 e 25 peso normal;
-Entre 25 e 30 acima do peso;
-Entre 30 e 40 obeso;
-Acima de 40 obesidade grave;
*/

let altura = 1.63;
let peso = 70;
let resultadoImc = peso / (altura * altura);

console.log('O resultado do IMC é : ' + resultadoImc.toFixed(2));

if (resultadoImc < 18.5) {
    console.log('Abaixo do peso');
} else if (resultadoImc >= 18.5 && resultadoImc < 25) {
    console.log('Peso normal');
} else if (resultadoImc >= 25 && resultadoImc < 30) {
    console.log('Acimado peso');
} else if (resultadoImc > 30 && resultadoImc < 40) {
    console.log('Obeso');
}