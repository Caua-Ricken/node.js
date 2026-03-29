const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const users = require('./users');

//ler o body da requisição
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

const basePath = path.join(__dirname, 'templates'); 

app.use('/users', users);


app.get('/', (req, res) => {  //usuario enviou um formulario vai vir pela req, quando o useuario acesso o enviou algo vem no req, e res é oque enviamos de volta ao usuario.
   res.sendFile(`${basePath}/index.html`); //enviando o arquivo html para o usuario, o sendFile é para enviar um arquivo, e o caminho do arquivo é o basePath + o nome do arquivo html. 
});

// OBS: sempre criar as rotas acima da rota raiz a /, pois se criar a rota raiz antes das outras rotas, as outras rotas não vão funcionar, pois a rota raiz vai ser a primeira a ser encontrada e as outras rotas não vão ser encontradas.

app.listen(port, (err) => {
    if (err){
        console.log('Error starting server: ', err);
    }
    console.log(`server rodando na porta ${port}`);
})

