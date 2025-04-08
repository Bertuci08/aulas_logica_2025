//trabalhando com laços de repetição

//executar o laço c vezez

const prompt = require('prompt-sync')();

let contador =1
//irá repetir enquanto o contador a condição for verdadeira
//ou seja sera verdade enquanto o contador for menor ou igual a 5
while (contador <= 5) {
    console.log(`o contador é ${contador}`);
//incrementando a variavel ou seja adicionando valor a ela, para que continue o processo ate que a condição seja atingida
    contador = contador + 1
}
console.log("Fim");

let senha = 'bertuci dela'

while (true) {
    let senha1 = prompt("digite a senha: ")
    if(senha == senha1){
        console.log('você hackeou a senha, seu belo de um rato');
        break
    }else if (senha1 == "desito"){
        break
    }
}

//desafio
let soma = 0;
let quantidade = 0;
let encerrar =""
while (encerrar != "SUB-TOTAL") {
    let valor = Number(prompt('digite o valor do produto: '));

        soma = soma + valor;
        quantidade++;
        encerrar = prompt("Deseja continuar: (digite SUB-TOTAL) ")
}

console.log(`Foram informados ${quantidade}`);
//ToFixed e para colocar somente dois numeros apos a virgula
console.log(`Valor total do produtos ${soma.toFixed(2)}`);


let soma1 = 0;
let quantidade1 = 0;

while (true) {
    let valor = Number(prompt('digite o valor do produto(0para encerrar): '));
    if(valor ==0 ){
        break;
    }
    else{
        soma1 = soma1 + valor;
        quantidade1++;
    }
}

console.log(`Foram informados ${quantidade}`);
//ToFixed e para colocar somente dois numeros apos a virgula
console.log(`Valor total do produtos ${soma.toFixed(2)}`);



console.log("####################################");
console.log("❤️     JOGO DA ADVINHAÇÃO     ❤️");
console.log("####################################");

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um numero aleatorio 
let acertou = false;

while (!acertou) {
    const chute = parseInt(prompt('❤️ digite um numero entre 1 a 100: '))
    if(chute > nrSorteado){
        console.log(`Você chutou ${chute}, tente um numero menor`);
        
    }else if(chute < nrSorteado){
        console.log(`Você chutou ${chute}, tente um numero maior`)
     
}else if(chute == nrSorteado){
        console.log(`Você chutou ${chute}, você acertou miseravi`);
        acertou = true
    }
}

console.log('FIM');
