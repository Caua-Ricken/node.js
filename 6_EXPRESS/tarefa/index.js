const express = require('express');
const path = require('path');
const users = require('./routes/rotas');
const app = express();
const port = 5000;

const basePath = path.join(__dirname, 'templates'); 

app.use(express.static('public'));

app.use('/routes', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`);
})

app.listen(port, (err) => {
    if (err) {
        console.log('ocorreu um erro');
    }

    console.log(`servidor rodando na porta ${port}`);
})

