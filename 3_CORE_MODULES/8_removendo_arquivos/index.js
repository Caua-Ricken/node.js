import fs from 'fs';

fs.unlink('arquivo.txt', (err) => { // unlink é o método para remover arquivos
    if (err) {
        console.log(err);
        return;
    }

    console.log('arquivo removido com sucesso!');
})