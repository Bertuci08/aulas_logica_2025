const prompt = require('prompt-sync')();

let salario =Number(prompt('digite o seu salario: '))
if(salario <= 2000){
    console.log(`seu slario ${salario+(salario * 12 /100)}`)
}else if(salario > 200 && salario <= 4000) {
    console.log(`você ira receber ${salario + (salario * 10 / 100)}`);
    
}else {
    console.log(`você ira receber ${salario + (salario * 8 /100)}`)
}
