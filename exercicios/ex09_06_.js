const prompt = require('prompt-sync')()
function senha(qc) {
    let senhaGerada = ''
    let lista = ['m', 'b', 'r', 's', 'a', '8', '3', '2', '*']

    for (let i = 0; i < qc; i++) {
        let aleatorio = Math.floor(Math.random() * lista.length)
        senhaGerada += lista[aleatorio]
    }

    console.log(`Senha gerada: ${senhaGerada}`)
}

senha(8)
