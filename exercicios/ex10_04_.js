let saldo = 0;


//função para depositar
function depositar(valorDeposito){
    saldo += valorDeposito
}


//criar a funçaõ para sacar
function sacar(valorSaque){
    saldo -= valorSaque
}


//função mostrar saldo
function mostrarsaldo(){
    console.log(`Seu saldo: ${saldo}`);
}


function caixaEletronico(){
    const prompt = require('prompt-sync')();
    let opcao = 0;

    while(opcao != 4){
        console.log('=== Caixa Eletronico ===');
        console.log('[1] - Depositar');
        console.log('[2] - Sacar');
        console.log('[3] - Mostrar Saldo');
        console.log('[4] - Sair');

        opcao = Number(prompt("Escolha uma opcao: "))

        switch(opcao){
            case 1:
                let valorDeposito = Number(prompt("Digite um valor a ser depositado: "))
                depositar(valorDeposito)
                break;
            case 2:
                let valorSaque = Number(prompt("Digite um valor a ser Sacado: "))
                sacar(valorSaque)
                break;
            case 3:
                mostrarsaldo()
                break;
            case 4:
                console.log("Obrigado por usar o banco!");
                break;
            default:
                console.log('Opcao invalida');
                
                
        }
        
    }

}

caixaEletronico()