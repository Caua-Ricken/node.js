const express = require('express')
const cors = require('cors')
const pool = require('./db/conn')
const app = express()

const rotas = require('./routes/api');

app.use(cors())
app.use(express.json())

app.use('/', rotas);

app.listen(3000, (err) => {
    if (err) {
      console.log('Erro ao iniciar o servidor:',  err);
      return;
    }
    console.log('Servidor rodando na porta 3000');
})