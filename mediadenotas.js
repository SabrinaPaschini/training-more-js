/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua media e a sua classificação conforme a tabela abaixo 
cacular e imprimir a media 
media = (nota 1 + nota 2 + nota 3) / 3 ; 
classificação: 
- media menor que 5, reprovação; 
- media entre 5 e 7, recuperação;
- media acima de 7, passou de semestre; 
*/

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;
let ValorDaMedia = (nota1 + nota2 + nota3) / 3;

if (ValorDaMedia < 5) {
    console.log('Aluno reprovado');
} else if (ValorDaMedia = 5 && ValorDaMedia <= 7) {
    console.log('Aluno está de recuperação');
} else if (ValorDaMedia = 7) {
    console.log('Aluno passou de semestre');
}

console.log('O valor da média é : ' + ValorDaMedia.toFixed(2));





