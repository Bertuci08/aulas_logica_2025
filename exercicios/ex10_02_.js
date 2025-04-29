const prompt = require('prompt-sync')();

let Euro = 6.45
let Dolar = 5.70
let reais = Number(prompt('Quantos reais voce tem: '))
let valor_da_conversao = reais / Euro
let valor_da_conversao1 = reais / Dolar

function conversao(valor){

   // reais / Euro 
  //  reais / Dolar

    console.log(reais / valor);
 //   console.log(valor_da_conversao1);
    
}

conversao(Euro)
conversao(Dolar)