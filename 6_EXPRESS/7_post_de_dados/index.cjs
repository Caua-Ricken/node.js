const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates'); //__dirname é o caminho do arquivo atual, e o join é para juntar o caminho do arquivo atual com a pasta templates, onde estão os arquivos html.

//ler o body da requisição
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());


app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuario é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/userform.html`); // finalizar a requisição
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id; //req.params é para pegar os parametros da url, e o id é o nome do parametro que estamos pegando.
    console.log(`estamos buscando pelo usuario ${id}`);
    res.sendFile(`${basePath}/users.html`);
})

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

