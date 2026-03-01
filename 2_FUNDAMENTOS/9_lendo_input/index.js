const readline = require('readline').createInterface({
    input: process.stdin, // define o input como o stdin (entrada padrão)
    output: process.stdout // define o output como o stdout (saída padrão)
}) 

readline.question("qual a sua linguagem preferida?", (linguagem) => {
    if (linguagem === 'python') {
        console.log('isso nem é linguagem')
    } else {
        console.log(`a minha linguagem preferida é ${linguagem}`)
    }
    readline.close() // fecha o readline após a resposta ser processada
})



