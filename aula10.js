const prompt = require('prompt-sync')();

//Estrutura condicioinal aninhada
let idade = Number(prompt('Digite sua idade'))

if(idade >= 18 && idade <= 70){
    console.log("Voto Obrigatório")
}
else{
    if(idade < 16){
        console.log("Você não pode votar")
    }else{
        if(idade >= 16 || idade > 70){
            console.log("Voto Facultativo")
        }
    }
}

//Switch Case - Estrutura de  controle de fluxo para tomar decisões
//com base no valor de uma variável
let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))
let op = prompt("Escolha a operação (+. -, *, /, **")

//testa o valor da variável se é true
switch(op){
    //Caso a variavel op for verdadeiro, testaria cada condição
    //caso uma condição seja igual à um dos "cases" executará
    //o bloco em questão, usamos o break para interromper o processo
    case '+':
        console.log(`Resultado: ${n1 + n2}`)
        break
        case '-':
        console.log(`Resultado: ${n1 - n2}`)
        break
        case '*':
        console.log(`Resultado: ${n1 * n2}`)
        break
        case '-':
        console.log(`Resultado: ${n1 / n2}`)
        break
        case '*':
        console.log(`Resultado: ${n1 ** n2}`)
        break
        case '*':
            default:
                console.log(`Operação Inválida`)
}

//Verificar qual letra é igual
let letra = prompt('Digite uma letra: ').toLocaleLowerCase()
//quando usamos switch(variavel), o switch compara exatamente o valor da variavel
//com os cases ja definidos

switch(letra){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log('Vogal');
        break;
        default:
            console.log('Consoante');
            
}

//converter a nota em numero para letra
let nota=parseInt(prompt("Digite a nota do aluno"))
// o switch (true) verifica quais expressoes dentro do case retornam true(verdade)
//ou seja comparamos as expressoes booleanas

switch (true) {
    case nota >= 90:
        console.log("Nota A");
        break;
        case nota >= 80:
            console.log("Nota B");
            break;
            case nota >= 70:
                console.log("Nota c");
                break;
                case nota >= 60:
                    console.log("Nota D");
                    break;
                    default:
                        console.log("Nota E");
                        
}