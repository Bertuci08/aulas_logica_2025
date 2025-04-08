//importano a biblioteca para receber dados
c

//variaveis e constantes
//passo 1: receber o nome da pessoa
let nome="Bertuci";
//passo 2: receber a idade da pessoa
let idade=16;
//passo 3: receber o peso da pessoa
let peso=64.5;
//passo 4: exibir nome, a idade e o peso
console.log('Bertuci', '16', '64.5');

//REceber e armanzenar o texto em uma variavel
   let     curso  =                "desenvolvimento de sistemas"
// #tipo   nome   recebe valor     na variavel

//Exibir o valor armazenado
console.log("curso") //imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso" , curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 16 // valor do tipo int
let temperatura = 23.5 // valor do tipo float
let nome2 = "Neymar"

console.log("Ola", nome2, "você tem:", idade2, "e hoje esta fazendo", temperatura, "ºC" )

//usando template string
console.log(`Ola ${nome2},voce tem ${idade2} e hoje esta fazendo: ${temperatura}ºC `)

let chovendo = false
let dia = true
// nas constantes não podem ser atribuidos novos valores
const PI = 3.1415
console.log(PI)

//utilizando prompt para receber dados
//entrada de dados

//no prompt sempre recebemos uma spring
nome = prompt('qual é seu nome?')
//usando o parseInt ou parseFloat converte os valores recebidos
//que vem como string para int ou float
idade = parseInt(prompt('qual é sua idade?'))
peso = parseFloat(prompt('qual é seu peso?'))

console.log(`seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)
//valida o tipo de variavel
console.log(typeof(idade))
console.log(typeof(peso))
//apos a conversão dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso)
