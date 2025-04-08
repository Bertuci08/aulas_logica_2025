const prompt = require('prompt-sync')();

let entrada;
let pares = 0
let somaPar = 0
let Impar = 0
let somaIpar = 0

console.log("Digite númrtos (0 para encerrar): ");
while (true) {
    entrada = parseFloat(prompt("Número: "))
    
    if(entrada === 0){
        break; // encerra o loop
    }
    if(entrada % 2 == 0){
        somaPar = entrada + somaPar;
        pares++
    }
    else{
        somaIpar = entrada + somaIpar;
        Impar++
    }
}

console.log(`Soma dos pares digitados: ${somaPar} quantidade de par ${pares}`);
console.log(`Soma dos impares digitados: ${somaIpar} quantidade de impar ${Impar}`);
