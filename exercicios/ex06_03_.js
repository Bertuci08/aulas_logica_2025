const prompt = require('prompt-sync')();

let par = 0;
let impar = 0;
let somaPar = 0;
let somaImpar = 0;
let entrada = 0;

for(let i = 0; i <= 5; i++){
    entrada  =Number(prompt("Digite um número: "));
    if(entrada % 2 == 0){
        somaPar += entrada;
        par++
    }
    else{somaImpar += entrada;
        impar++
    }
}

console.log(`A soma de ${somaPar} é ${par}`);
console.log(`A soma de ${somaImpar} é ${impar}`);
