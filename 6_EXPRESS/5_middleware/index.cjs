const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates'); //__dirname é o caminho do arquivo atual, e o join é para juntar o caminho do arquivo atual com a pasta templates, onde estão os arquivos html.

const checkAuth = (req, res, next) => { //middleware para verificar se o usuario está autenticado, o next é para passar para a próxima função, se o usuario estiver autenticado, ele passa para a próxima função, se não, ele retorna uma mensagem de erro.
    req.authStatus = true;

    if (req.authStatus) {
        console.log("usuario autenticado, prossiga");
        next(); //passando para a próxima função, que é a função que vai enviar o arquivo html para o usuario.
    } else {
        console.log("não está logado, faça login para acessar");
        next();
    }
}

app.use(checkAuth); //usando o middleware para todas as rotas, ou seja, para todas as requisições que chegarem no servidor, ele vai passar pelo middleware checkAuth, e depois ele vai passar para a próxima função, que é a função que vai enviar o arquivo html para o usuario.

app.get('/', (req, res) => {  //usuario enviou um formulario vai vir pela req, quando o useuario acesso o enviou algo vem no req, e res é oque enviamos de volta ao usuario.
   res.sendFile(`${basePath}/index.html`); //enviando o arquivo html para o usuario, o sendFile é para enviar um arquivo, e o caminho do arquivo é o basePath + o nome do arquivo html. 
});


app.listen(port, (err) => {
    if (err){
        console.log('Error starting server: ', err);
    }
    console.log(`server rodando na porta ${port}`);
})