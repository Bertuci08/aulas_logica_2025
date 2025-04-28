let listaNomesM = ['Miguel', 'Arthur', 'Gael', 'Théo', 'Heitor', 'Ravi', 'Davi', 'Bernardo', 'Noah', 'Gabriel', 'Samuel', 'Pedro', 'Anthony', 'Isaac', 'Benício', 'Benjamin', 'Matheus', 'Lucas', 'Joaquim', 'Nicolas', 'Lucca', 'Lorenzo']

function AdicionarNome(nome){
    listaNomesM.push(nome)
    
    console.log(listaNomesM);
    
}
AdicionarNome('Bertuci')
AdicionarNome('Barreto')

function RemoverNome(nome){
    listaNomesM.pop()
    listaNomesM.splice(22,1)
    
    console.log(listaNomesM);
    
}
RemoverNome()