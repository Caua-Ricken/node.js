//mais de um valor
const x = 10;
const y = 'texto';
const z = [1, 2, 3];

console.log(x, y, z); //imprime os valores de x, y e z

//contagem de impressões
console.count(`o valode de x é ${x}, contagem`)

//variavel entre strings
console.log("o nome é %s, ele é programador", y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000)