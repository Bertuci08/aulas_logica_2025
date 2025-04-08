const prompt = require('prompt-sync')();

let filmes = ['Gigantes de aço','barbie', 'winx', 'transformers', 'planeta dos barretos', 'como treinar o barreto', '3 espiãs de+' ]
console.log(filmes[0]);

console.log(filmes[4]);


filmes[6] = 'A vovozona'
console.log(filmes);


filmes.splice(5,0, 'The Amanzing Spider-man')
console.log(filmes);


filmes.shift()
console.log(filmes);


filmes.pop()
console.log(filmes);


console.log(filmes.slice(0,3));


console.log(filmes.slice(2,6));


console.log(filmes.length);


filmes.reverse()
console.log(filmes);
