//Faça um algoritmo que em uma função receba 4 notas bimestrais e mostre a média
//e se o aluno passou de ano ou está de recuperação considerando média acima de 7
//aprovado, entre 5 e 7 em recuperação e abaixo de 5 reprovado.

function notas(n1, n2, n3, n4){
    let media = (n1 + n2 + n3 + n4) /4
    if(media > 7){
        console.log("Aluno aprovado!");
    }else if(media >5 && media < 7 ){
        console.log("Aluno de recuperação!");
    }else{

    
        console.log("Aluno reprovado!");
    }    

}
notas(5, 7, 8, 10)