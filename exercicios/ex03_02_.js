const prompt = require('prompt-sync')();

let anoAtual =Number(prompt('digite o ano atual: '))
let anoNascimento =Number(prompt('digite o ano do seu nascimento: '))
let resultado = anoAtual - anoNascimento
console.log(resultado);
if(resultado <= 10){
    console.log('você é uma criança');
}
else if(resultado >=11 && resultado <= 17){
    console.log('você é um adolescente');
}else if(resultado >= 18 && resultado <= 59){
    console.log('você é um adulto');
}else{(resultado >60)
    console.log('você é um idoso');}
