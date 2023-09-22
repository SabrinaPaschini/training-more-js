//Função para ver se é maior de idade 


function escrevaMeuNome(nome){
    
    return 'Meu nome é : ' + nome ;

}

escrevaMeuNome('sabrina');
escrevaMeuNome('maria');

function conferirMarioridade(idade) {
    if (idade <= 18) {
        console.log(escrevaMeuNome('maria') + ' e sou maior');
    } else if (idade > 18) {
        console.log('Maior de idade ' + idade);
    }
}


conferirMarioridade(18);




