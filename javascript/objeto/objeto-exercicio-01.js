/*
crie uma classe para representar carros 
os carros possuem uma marca, uma cor e um gasto medio de combustivel por km rodado. 
crie um metodo que dado a quantidade de quilometros o preco do combustivel nos de o valor gasto em reais para realizar esse percurso 

*/ 
class Carro {
    marca;
    cor; 
    gastoPorKm;

// tudo que é necessário para criar um carro precisa deve ser passado no contrutor 
//é uma funcao sem o nome function 
//paramentros, são as variaveis 

    constructor (marca,cor,gastoPorKm){
//atribuindo ao atributo o valor marca que estamos recebendo no construtor 
//guardar os valores, sem precisar de const 
//usando o this.

        this.marca = marca;
        this.cor = cor; 
        this.gastoPorKm = gastoPorKm;

    }

//metodo é uma ação dentro de um objeto, tipo uma função ? 
//toda vez que for usar algo do objeto this. 

calcularGasto(DistanciaEmKm,precoCombustivel){

    return DistanciaEmKm * this.gastoPorKm * precoCombustivel
}

}

//criar o carro novo 

const uno = new Carro('fiat','verde',1/12);

//usar o metodo para calcular o gasto da viagem 

console.log(uno.calcularGasto(70,5).toFixed(2));

const palio = new Carro ('fiat','preto',1/10);

console.log(palio.calcularGasto(70,5).toFixed(2));

