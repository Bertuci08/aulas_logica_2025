const prompt = require('prompt-sync')()

console.log("bem-vindo ao curso de JavaScript!")
console.log("estou aprendendo a usar o console.log")

console.log(15 +25);
console.log(100 -45);
console.log(12 *7);
console.log(144 /12);
console.log(20 % 3);
console.log(2 ** 5);


//exercicios de variaveis e entrada de dados
//1 passo nome, altura, escola, ano
let nome="gabriel bertuci"
let altura='1.73'
let escola="Sesi-SP"
let ano='2025'

console.log(nome)
console.log(altura)
console.log(escola)
console.log(ano)
console.log(`${nome}, tem ${altura}, estuda na ${escola}, no ano de ${ano} `)

//2 passo nome do professor, materia, ano ingressado
let nomeProfessor="ricardo"
let materia="matematica"
let anoIngresso="2022"

console.log(nomeProfessor)
console.log(materia)
console.log(anoIngresso)
console.log(`${nomeProfessor}, que atua na materia de ${materia} ingressou no ano de ${anoIngresso}`)

//3 passo exibir valores das variaveis
nome = prompt('qual é seu nome?')
altura = parseFloat(prompt('qual é sua altura?'))
escola = prompt('qual é sua escola?')
ano = parseInt('qual o ano?')

nomeProfessor = prompt('qual o nome do professor?')
materia = prompt('qual a materia da aula?')
anoIngresso = prompt('qual o ano que o professor entrou na escola?')
console.log(`o professor ${nomeProfessor} que leciona a materia ${materia} no ano de ${ano}. E ingressou na ${escola} no ano de ${anoIngresso}`)

