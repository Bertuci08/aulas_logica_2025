const prompt = require('prompt-sync')();

let letra = 'J'
let meses = ["Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];

for(let mes of meses){
    if(mes.includes(letra)){
        console.log(mes);
        
    }
}