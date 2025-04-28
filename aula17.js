//variaveis globais e locais

function nomeEscola(cidadePara){
    escola = 'SESI'
    console.log(escola);
    //declarando uma variavel local
    var cidade = cidadePara
    console.log(cidade);
    
}

//essa vairavel é uma variavel global, pois ela pode ser acessada em qualquer parte do codigo
var escola = 'Senai'
console.log(escola);
nomeEscola('Araçatuba')
var cidade = 'Andradina pai de todas as cidades da região'
console.log(cidade);

var x = 10 //Variavel global
console.log('Fora da função', x);

function minhaFuncao(){
    let x = 0; // variavel local
    x = x + 1;
    console.log('Dentro da Função', x);
    
}
minhaFuncao()

console.log('Fora da função de novo', x);
/////////////////////////////////////////////////////////////
var x = 10 //Variavel global
console.log('Fora da função', x);

function minhaFuncao(){
    // estamos usando a variavel global
    x = x + 1;
    console.log('Dentro da Função', x);
    
}
minhaFuncao()
x +=1
console.log('Fora da função de novo', x);