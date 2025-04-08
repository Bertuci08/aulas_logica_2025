const prompt = require('prompt-sync')();

//peça dois numeros ao usuairo e mostre qual o maior e qual o menor
let numero =Number(prompt('mande um numero que voce preferir:'))
let numero1 =Number(prompt('mande um outro numero que voce preferir:'))
//validar qual o maior e qual o menor
if(numero > numero1){
    console.log('o primeiro numero e maior que o segundo')
}
if(numero1 > numero){
    console.log('o primeiro numero é menor que o segundo')
}

