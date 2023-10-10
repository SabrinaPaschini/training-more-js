/*crie uma classe para representar pessoas 
para cada pessoas: nome, peso e altura 
as pessoas devem ter a capacitade de dizer o valor do seu imc 
instancie uma pessoa que se chama jose, que tenha 70kg e 1,75 de altura e peca para o jose dizer o valor de seu imc */

class Pessoa {

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        return this.peso / (this.altura * this.altura);
    }

    tabelaImc() {

        const resultadoImc = this.calculaImc();

        if (resultadoImc < 18.5) {
            return (this.nome + ' abaixo do peso,' + 'seu IMC é : ' + resultadoImc.toFixed(2));
        } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
            return (this.nome + ' está com peso normal, ' + 'seu IMC é : ' + resultadoImc.toFixed(2));
        } else if (resultadoImc >= 25 && resultadoImc < 30) {
            return (this.nome + ' está acimado peso, ' + 'seu IMC é : ' + resultadoImc.toFixed(2));
        } else if (resultadoImc > 30 && resultadoImc < 40) {
            return (this.nome + ' está obesa, ' + 'seu IMC é : ' + resultadoImc.toFixed(2));
        } else if (resultadoImc > 40 && resultadoImc < 300) {
            return (this.nome + ' está com obesidade mórbida, ' + 'seu IMC é : ' + resultadoImc.toFixed(2));
        }
    }
}

let joao = new Pessoa('João', 70, 1.75);
let maria = new Pessoa('Maria', 66, 1.63);

console.log(maria.tabelaImc());
console.log(joao.tabelaImc());