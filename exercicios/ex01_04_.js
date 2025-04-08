const prompt = require('prompt-sync')();

let nota1 = Number(prompt("digite a sua nota:"))
let nota2 = Number(prompt("digite a sua nota:"))
let media = nota1 + nota2
let resultado = media / 2
console.log(`nota ${nota1}, nota ${nota2}, media ${resultado}`)
