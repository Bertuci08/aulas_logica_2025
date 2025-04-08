const prompt = require('prompt-sync')();

let mes = prompt('digite o mês:')


if(mes == "janeiro"  ||mes == "março" ||mes == "maio" || mes == "julho" || mes == "agosto" || mes == "outubro" || mes == "dezembro" )  
{
    console.log('este mes tem 31 dias')
}
else if(mes == "fevereiro")
{
   console.log("pode ter 28 ou 29 dias")
}
else
    {
        console.log("este mes tem 30 dias")
    }