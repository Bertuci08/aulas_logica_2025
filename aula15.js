const prompt = require('prompt-sync')();

//criando nossa primeira função
function cabecalho(texto){
    console.log('--------------------------------------');
    console.log(texto);
    console.log('--------------------------------------');
}
//criando outra função, função de saudação
function saudação(){
    let nome = prompt('digite seu nome: ')
    console.log(`${nome} tenha um bom dia`);
}



//chamando a função
//passando o parametro junto com a função
cabecalho('SESI/SENAI')
//posso declarar uma variavel e passa-la como parametro para função
saudação()

//criei a função soma e ira receber dois valores como parametro, a partir desses valores, realizara os calculos e mostrara o resultado
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
    
}
soma(5,6)
soma(5,5)
soma(12,18)





//desafio
function ParImpar(numero) {
    resultado = numero % 2

    if( resultado != 0){
        console.log(` o seu resultado de ${numero} é impar`)
}

    else{
        console.log(` o seu resultado de ${numero} é par`)};
    
    
}
ParImpar(5)
ParImpar(8)

//função com retorno do resultado, o calculo é realizado e é retornado para a chamada da função

function media(n1, n2){
    let resultado = (n1 + n2) /2
    return(resultado)
}
console.log(media(6,8));
//armo retorno da função em uma variavel
let valor = media(9,7);
//utilizei o retorno da função para escrever na tela
console.log(valor);
//utilizei a variavel que recebeu o retorno da função para chamar a função Par ou Impar, passando o valor como parametro
ParImpar(valor)