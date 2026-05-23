const express = require('express');
const app = express()
const conn = require('./db/conn');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const api = require('./routes/api');
const web = require('./routes/web');

app.use('/', api)
app.use('/', web)

app.listen(3000, async (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Servidor rodando na porta 3000');
})