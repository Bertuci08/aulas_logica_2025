const prompt = require('prompt-sync')();

let idade = Number(prompt('fala seu ano de nascimento ai lindão:'))
let ano = idade - 2025
if(ano > 18){
    console.log('você é maior de idade lindão do pai!')

}else{
    console.log('você é não é maior de idade, saia daqui agora!!')
}
