const prompt = require('prompt-sync')();

//receba um numero 
let numero =Number(prompt('mande um numero ai garotao!:'))
if(numero % 2 == 0){
    console.log(' o seu numero é par')
}else{console.log(' o seu numero é impar')
}

