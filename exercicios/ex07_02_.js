const prompt = require('prompt-sync')();

let times = ['Corinthians', 'São Paulo', 'Palmeiras', 'Cuiaba', 'Sport', 'vitoria', 'Gremio', 'Fortaleza', 'Botafogo', 'Vasco', 'Cruzeiro', 'Atletico Mineiro', 'Santos', 'America mineiro', 'Athletico Paranaense', 'Flamengo', 'Internacional', 'Fluminense', 'Ceará', 'Bahia', 'Juventude']

console.log(`O time campeão e melhor do mundo foi o ${times[0]}`);


console.log(`esses 4 times irão jogar a libertadores`);
console.log(times.slice(0,4));


console.log('times rebaixados para série B');
console.log(times.splice(17,20));

