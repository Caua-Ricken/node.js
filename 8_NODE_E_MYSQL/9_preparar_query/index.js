const express = require('express');
const app = express();
const port = 3000;
//conexão com o banco de dados
const pool = require('./db/conn');

const pages = require('./routes/web');
const apis = require('./routes/api')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', pages);
app.use('/', apis);


app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err);
    }
    console.log(`Server is running on port ${port}`);
})