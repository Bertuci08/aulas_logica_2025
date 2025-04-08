const prompt = require('prompt-sync')();

let dia_da_semana1 =Number(prompt('digite um numero de 1 a 7: '))

switch (true) {
    case dia_da_semana1 == 2:
        console.log('Segunda-Feira');
        break;
    case dia_da_semana1 == 3:
        console.log('Terça-Feira');
        break
    case dia_da_semana1 == 4:
        console.log('Quarta-Feira');
        break
    case dia_da_semana1 == 5:
        console.log('Quinta-Feira');
        break
     case dia_da_semana1 == 6:
        console.log('Sexta-Feira');
        break
    case dia_da_semana1 == 7:
        console.log('Sabado');
        break
    case dia_da_semana1 ==1:
        console.log('Domingo');
        break

}