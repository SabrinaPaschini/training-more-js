/*crie uma classe para representar pessoas 
para cada pessoas: nome, peso e altura 
as pessoas devem ter a capacitade de dizer o valor do seu imc 
instancie uma pessoa que se chama jose, que tenha 70kg e 1,75 de altura e peca para o jose dizer o valor de seu imc */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {

        return this.peso / (this.altura * this.altura);
        
    }

  
}

const maria = new Pessoa('maria', 63, 1.63);
console.log(maria);
console.log('O meu imc é : ' +maria.calculaImc().toFixed(2));


/*
let imcMaria = maria.calculaImc();
console.log(imcMaria);
*/