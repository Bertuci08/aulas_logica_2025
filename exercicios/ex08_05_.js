const numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);


numeros.forEach(numeros => {
  console.log(`Número: ${numeros}, Dobro: ${numeros * 2}`);
});