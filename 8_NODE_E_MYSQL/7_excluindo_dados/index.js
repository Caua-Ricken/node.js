const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;
const pages = require('./routes/web');
const apis = require('./routes/api')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', pages);
app.use('/', apis);

//conexão com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})


conn.connect((err) => {
    if (err) {
        console.log(`Error connecting to database: ${err}`);
        return;
    }
    console.log('Connected to database!');

    app.listen(port);
})
