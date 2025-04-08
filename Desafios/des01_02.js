const prompt = require('prompt-sync')();

let horas =Number(prompt('que horas são agora meu menino?'))
if(horas >=5 && horas <=11){
    console.log('bom dia amor do pai! ');
    
}else if(horas >=12 && horas<= 17){
    console.log('boa tarde bebezinha!');
    
}else if(horas >= 18 && horas <= 23){
    console.log('boa noite meu anjo!');
    
}else{console.log('vai dormir rapaz ja e madrugada e amanha voce tem aula!');
}