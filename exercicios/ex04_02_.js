const prompt = require('prompt-sync')();

let anoAtual1 =Number(prompt('digite o ano atual: '))
let anoNascimento1 =Number(prompt('digite o ano do seu nascimento: '))
let resultado1 = anoAtual1 - anoNascimento1
console.log(resultado1);
switch (true) {
    case resultado1 <= 10:
        console.log('Você é uma criança');
        break;
    case resultado1 >= 11 && resultado1 <= 17:
        console.log('você é um adolescente');
        break;
    case resultado1 >= 18 && resultado1 <= 59:
        break;
                    
    default:
        console.log ('você é um idoso')
        break;
}
