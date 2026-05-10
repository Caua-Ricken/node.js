const express = require('express');
const app = express();
const port = 3000;
//conexão com o banco de dados
const conn = require('./db/conn');

//importando o model
const User = require('./models/User');
const Address = require('./models/Address');

const pages = require('./routes/web');
const apis = require('./routes/api')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', pages);
app.use('/user', apis);


const start = async () => {
    try{
        await conn.sync();
        console.log('Banco de dados sincronizado!');
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start();