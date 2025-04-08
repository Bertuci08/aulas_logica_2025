const prompt = require('prompt-sync')()

//operação com variaveis
let nr1 = Number(prompt("digite um numero?"))
let nr2 = Number(prompt("digite um numero?"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} e igual: ${soma}`)

//divisão
let divisão = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igul: ${divisão}`)

//multiplicação
let multiplicação = nr1 * nr2
console.log(`A multipicação entre ${nr1} * ${nr2} é igul: ${multiplicação}`)

//subtração
let subtracao = nr1 - nr2
console.log(`A subtração entre ${nr1} - ${nr2} é igul: ${subtracao}`)

//exponenciação
let exponenciação = nr1 - nr2
console.log(`A exponenciação entre ${nr1} ** ${nr2} é igul: ${exponenciação}`)

// calculando novo preço do celular com desconto
let valor = Number(prompt('digite valor do celular: '))
let desconto = Number(prompt('digite valor do desconto: '))
valor = valor - desconto
console.log(`o valor do celular com desconto é R$${valor}`)

//calculando dobro e a metade
//passo 1
let numero = Number(prompt('digite um numero?'))
//passo2
let dobro = numero *2
//passo 3
let metade = numero /2
//passo 4
console.log(`o seu dobro é ${dobro}`)
console.log(`a sua metade é ${metade}`)

//descobrir o valor da obra, as horas e o resultado: bertuci
let valor2 = Number(prompt('digite valor de dias que voce vai a dia de trabalho:'))
let horastrabalhadas = Number(prompt('digite valor de horas que voce vai trabalhar:'))
let multiplicar = horastrabalhadas * valor2
console.log(`seu valor é de ${multiplicar}`)
let valorganhoporhoras = Number(prompt('digite valor que vai ganhar por cada hora trabalhadas:'))
let resultadofinal = valorganhoporhoras * multiplicar
console.log(`o seu resultado final é de ${resultadofinal}`)

//descobrir o valor da obra, as horas e o resultado: professor
let horasPorDia = 8
let DiasTotais = 15
let HorasTrabalhadas = horasPorDia * DiasTotais
let custoHora = 100
let custoTotal = HorasTrabalhadas * custoHora
console.log(custoTotal)
