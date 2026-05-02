const express = require('express');
const router = express.Router();
//conexão com o banco de dados
const conn = require('../../db/conn');

router.post('/insert', (req, res) => {
    const { title, pages} = req.body;

    const query = `INSERT INTO book (??, ??) VALUES (?, ?)`;
    const data = ['title', 'pageqtd', title, pages]

    conn.query(query, data, (err) => {
        if (err) {
            console.log(`Error inserting data: ${err}`);
        }
        res.redirect('/view');
    })
})



module.exports = router;