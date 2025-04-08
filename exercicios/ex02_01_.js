const prompt = require('prompt-sync')();

let nota1 = Number(prompt('digite sua nota:'))
let nota2 = Number(prompt('digite sua nota:'))

let soma = nota1 + nota2
console.log(soma)
let media = soma / 2
console.log(media)

if(media >= 7){
    console.log('aprovado')
}else{
    console.log('reprovado')
}


