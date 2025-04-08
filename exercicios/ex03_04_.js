const prompt = require('prompt-sync')();

let nota1 =Number(prompt('digite a sua nota: '))
let nota2 =Number(prompt('digite a sua outra nota: '))
let media = (nota1 + nota2) /2 
if(media > 7){
    console.log('aprovado!');
}else if(media >=5 && media <=7){
    console.log('ficou de recuperação!');
}else{( media <5)
   console.log('reprovado!')}
