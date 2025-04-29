const prompt = require('prompt-sync')();

let numeros = Number(prompt('Digite um número: '))
let numeros1 = Number(prompt('Digite um número: '))

let divisao = numeros / numeros1
console.log(`a divisão de ${numeros} e ${numeros1}, é igual a ${divisao}`);
