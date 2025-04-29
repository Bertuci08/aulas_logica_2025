

//Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50.
let numero = 0
function impares() {
   for (let i = 1; i <= 50; i++){
    if(i % 2 != 0)
    console.log(`${i} é impar`);
    
   }
}
impares()