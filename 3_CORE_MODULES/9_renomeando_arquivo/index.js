import fs from 'fs';

fs.rename('arquivo.txt', 'novo_arquivo.txt', (err) => { // rename é o método para renomear arquivos, o primeiro parâmetro é o nome do arquivo atual e o segundo é o novo nome do arquivo
    if (err) {
        console.log(err);
        return;
    }

    console.log('arquivo renomeado com sucesso!');
})