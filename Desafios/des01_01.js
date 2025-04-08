const prompt = require('prompt-sync')();

let temperatura =Number(prompt('digite a temperatura de hoje: '))

if(temperatura <= 15){
    console.log('Hoje o dia esta frio');
    
}else if(temperatura > 15 && temperatura <= 25){
    console.log('a temperatura esta agradavel');
    
}else if(temperatura >= 26 && temperatura <= 35){
    console.log('hoje o dia esta quente');
    
}else
    {console.log('hoje o dia esta bem quente');}
