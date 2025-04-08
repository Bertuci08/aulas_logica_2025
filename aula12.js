const prompt = require('prompt-sync')();

for (let I = 0; I <100; I++) {
console.log(I);
}

 //entregando os notebooks por ordem
 
console.log("Entregando Notebooks");

for(let numero = 1; numero <= 32; numero++ ){
    let nome = prompt(`Quem é o numero:  ${numero}`)
    let presente = prompt(`O(A) ${nome} veio para escola? (S ou N)`)
    if(presente == 'S'){
        console.log(`Pegar notebook ${numero}`);
        console.log(`Pegar mouse ${numero}`);
        console.log(`Pegar fonte ${numero}`);
        console.log(`Levar notebook até ${nome}`);
    }
    else{
        console.log(`Não pegar notebook ${numero}`);
        
    }
}