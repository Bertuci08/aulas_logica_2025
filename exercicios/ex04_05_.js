const prompt = require('prompt-sync')();

let salario1 =Number(prompt('digite seu salario: '))
switch (true) {
    case salario1 <=2000:
        console.log(`esse é seu salario: ${salario1 +(salario1 * 12 / 100)}`);
        break;
        case salario1 >200 && salario1 <=4000:
        console.log(`voce ira receber ${salario1 + (salario1 * 10 / 100)}`);
        break;
        default: 
        console.log(`voce ira receber ${salario1 + (salario1 * 8 / 100)}`);
} 