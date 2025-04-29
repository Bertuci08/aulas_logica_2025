const prompt = require('prompt-sync')();

let divida = Number(prompt('digite o valor da divida: '))

console.log(`1 parcela de: ${divida} é igual a 0% de juros e com o valor total de: ${divida}`);
console.log(`3 parcela de: ${divida} é igual a 10% de juros e com o valor total de: ${((divida + (divida * 10 / 100)) / 3).toFixed(2)}`);
console.log(`6 parcela de: ${divida} é igual a 15% de juros e com o valor total de: ${((divida + (divida * 15 / 100)) / 6).toFixed(2)}`);
console.log(`9 parcela de: ${divida} é igual a 20% de juros e com o valor total de: ${((divida + (divida * 20 / 100)) / 9).toFixed(2)}`);
console.log(`12 parcela de: ${divida} é igual a 25% de juros e com o valor total de: ${((divida + (divida * 25 / 100)) / 12).toFixed(2)}`);
