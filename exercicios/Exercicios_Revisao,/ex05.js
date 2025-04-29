//Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra
//escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido.

const prompt = require('prompt-sync')();

let Sexo = (prompt('Qual sexo você é: '))
switch (Sexo) {
    case "f":
        console.log("Você é feminino");
        break;
    case "m":
        console.log("Você é masculino");
        break;
    default:
        console.log("para de ser viado e seja o que voce foi feito!!");
        break;
}
