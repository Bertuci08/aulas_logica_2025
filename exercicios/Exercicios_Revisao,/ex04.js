//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas
//trabalhadas no mês. Calcule em uma nova variável e mostre o total do seu salário no referido
//mês.

const prompt = require('prompt-sync')();
let GanhoPorHora = Number(prompt('Digite quanto você ganha por hora: '))
let NumerosDeHorasTrabalhadas = Number(prompt('Quantas horas voce trabalhou no mês?: '))

let divisao = GanhoPorHora * NumerosDeHorasTrabalhadas
console.log(`Você trabalhou ${NumerosDeHorasTrabalhadas}, e ganhou um salario de ${divisao} nesse mês`);
