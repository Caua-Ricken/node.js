// nome

console.log(process.argv); // aqui estou usando o process.argv para ler os argumentos passados na linha de comando, ele retorna um array com os argumentos, onde o primeiro elemento é o caminho do node.exe, o segundo elemento é o caminho do arquivo index.js e os demais elementos são os argumentos passados na linha de comando

const args = process.argv.slice(2);
console.log(args);

const nome = args[0].split('=')[1];
console.log(`olá, ${nome}`)
