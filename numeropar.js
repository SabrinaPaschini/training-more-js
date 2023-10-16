/*
crie um programa que seja capaz de percorrer uma lista de numeros
e imprima cada numero par encontrado 
*/


let numeros = [1,2,3,4,5,6,7,8,9,10,244];


for (i=0; i < numeros.length; i++){

   if (numeros[i] % 2 === 0 ){

    console.log('Esse numero é par ' + numeros[i])

   }
}
