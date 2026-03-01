const x = "10";

//chacar se x é um numero
if (!Number.isInteger(x)) {
    throw new Error('o valor passado deve ser um numero inteiro')    
}

console.log('continuando...')