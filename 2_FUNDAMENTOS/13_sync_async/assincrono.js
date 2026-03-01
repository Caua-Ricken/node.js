import fs from 'fs';

console.log('Iniciando');

fs.writeFile('arquivo.txt', 'ola', (err) => {
    setTimeout(() => {
        console.log('Arquivo escrito');
    }, 1000)
})

console.log('fim')