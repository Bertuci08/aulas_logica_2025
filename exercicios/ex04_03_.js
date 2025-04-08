const prompt = require('prompt-sync')();

let mes1 = prompt('digite o mês:')
switch(true){
    case mes1 == "Janeiro" || mes1 == "Março" || mes1 == "Maio" || mes1 == "Julho" || mes1 == "Agosto" || mes1 == "Outubro" || mes1 == "Dezembro":
        console.log('Este mês tem 31 dias');
        break
    case mes1 == "Fevereiro":
        console.log("Este mês pode ter 28 ou 29 dias");
        break
    default:
        console.log("Este mês tem 30 dias");
                
}