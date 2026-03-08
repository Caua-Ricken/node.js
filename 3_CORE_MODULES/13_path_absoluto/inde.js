import path from 'path';

//path absoluto

console.log(path.resolve('arquivo.txt')); //retorna o caminho absoluto do arquivo

//formar path

const midFolder = 'relatorios'
const fileName = 'caua.txt'

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath); //retorna o caminho formado