const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//conexão com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

router.post('/insert', (req, res) => {
    const { title, pages} = req.body;

    const query = `INSERT INTO book (title, pageqtd) VALUES ('${title}', '${pages}')`;

    conn.query(query, (err) => {
        if (err) {
            console.log(`Error inserting data: ${err}`);
        }
        res.redirect('/');
    })
})

module.exports = router;