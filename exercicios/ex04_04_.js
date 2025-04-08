const prompt = require('prompt-sync')();

let nota3 =Number(prompt('digite a sua nota: '))
let nota4 =Number(prompt('digite a sua outra nota: '))
let media1 = (nota3 + nota4) /2
console.log(media1);

switch (true) {
    case media1 >7:
        console.log("Aprovado!");
        break;
    case media1 >=5 && media1 <=7:
        console.log("Ficou de recuperação!");
        break;
    case media1 <5:
        console.log("Reprovado!");
        break;
}