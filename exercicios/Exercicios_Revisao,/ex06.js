//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um
//algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7 * altura)–58      Para mulheres: (62.1 * altura)- 44.7,    exiba qual é o
//peso ideal da pessoa.


const prompt = require('prompt-sync')();

let H = Number(prompt('Digite sua altura: '))
let sexo =(prompt('Qual seu sexo (M ou F): '))
let PesoIdealM = 72.7 * H - 58
let PesoIdealF = 62.1 * H - 44.7

if(sexo == "F"){
    console.log(`Você é Homem e seu peso ideal é ${PesoIdealM}`);

}else{
    if(sexo == "M"){
        console.log(`Você é Mulher e seu peso ideal é ${PesoIdealF}`);
    }
}
    