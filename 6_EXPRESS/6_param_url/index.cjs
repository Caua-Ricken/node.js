const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates'); //__dirname é o caminho do arquivo atual, e o join é para juntar o caminho do arquivo atual com a pasta templates, onde estão os arquivos html.

app.get('/users/:id', (req, res) => {
    const id = req.params.id; //req.params é para pegar os parametros da url, e o id é o nome do parametro que estamos pegando.
    console.log(`estamos buscando pelo usuario ${id}`);
    res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {  //usuario enviou um formulario vai vir pela req, quando o useuario acesso o enviou algo vem no req, e res é oque enviamos de volta ao usuario.
   res.sendFile(`${basePath}/index.html`); //enviando o arquivo html para o usuario, o sendFile é para enviar um arquivo, e o caminho do arquivo é o basePath + o nome do arquivo html. 
});


app.listen(port, (err) => {
    if (err){
        console.log('Error starting server: ', err);
    }
    console.log(`server rodando na porta ${port}`);
})