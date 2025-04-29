//Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo.
const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um numero: '))
function valor(){
    if(numero < 0){
        console.log('Seu numero é negativo');
        
    }else{
        console.log('Seu numero é positivo');
        
    }
}
valor()