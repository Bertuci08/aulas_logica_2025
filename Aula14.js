let frutas = ["maca", "uva", "Banana", "abacaxi"]

// a variavel x serve para iterar os valores ate o limite da lista, o nome não é obrigatoriamente ser o nome i, x ou contador pode ser qualquer nome de variavel
for(let x = 0; x < frutas.length; x++){
    //o lenght identifica o tamanho total da lista
    console.log(`a fruta é ${frutas[x]}`);
    
}
let listaNome = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Rodrigo Garro']
//para cada nome da lista nomes, escreva um nome
for(let nome of listaNome){
    console.log(nome);
    
}

//verificando se é uma consoante
//lista de vogais
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z' ]

let letra = prompt('Digite uma letra: ')
// se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal');
    
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('é uma consoante ')}
    
else{console.log('não é uma letra');
}

//obtendo a posição do item
for(let[pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor, ou seja a posição e a fruta
    console.log(`posição ${pos} e fruta ${fruta}`);
    
}

// separando os itens em uma lista
let produtos = 'celular, notebook, tv, tablet, headset'
//o split divide a string e forma uma lista a partir do limitador, no caso abaixo uma virgula
let listaProdutos = produtos.split(',')
for(let produtos of listaProdutos){
    console.log(produtos);
}

//percorrendo uma string como uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra);
    
}