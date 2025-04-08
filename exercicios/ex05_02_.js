const prompt = require('prompt-sync')();

let numero = 1
while (numero <= 20){
    if(numero % 2 == 0){
        console.log(`${numero} é par`);
        
    }
    numero++
}
console.log("FIM");
