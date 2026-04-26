const express = require('express');
const router = express.Router();
//conexão com o banco de dados
const pool = require('../../db/conn');

router.post('/insert', (req, res) => {
    const { title, pages} = req.body;

    const query = `INSERT INTO book (??, ??) VALUES (?, ?)`;
    const data = ['title', 'pageqtd', title, pages]

    pool.query(query, data, (err) => {
        if (err) {
            console.log(`Error inserting data: ${err}`);
        }
        res.redirect('/view');
    })
})

router.get('/book', (req, res) => {
    const query = 'SELECT * FROM book';

    pool.query(query, (err, data) => {
        if (err) {
            console.log(`Error fetching data: ${err}`);
        }
        res.json(data)
    })
})

router.get('/book/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM book WHERE ?? = ?`;
    const data = ['id', id] 

    pool.query(query, data, (err, data) => {
        if (err) {
            console.log(`Error fetching data: ${err}`);
        }
        res.json(data[0]) // usei o [0] porque como ele retorna uma lista ele pega sempre o da primeira posicao
    })
})

router.get('/book/edit/:id', (req, res) => {
    const id = req.params.id;

    const query = `SELECT * FROM book WHERE ?? = ?`;
    const data = ['id', id] 

    pool.query(query, data, (err, data) => {
        if (err) {
            console.log(`Error fetching data: ${err}`);
        }
        res.json(data[0]); // usei o [0] porque como ele retorna uma lista ele pega sempre o da primeira posicao
    })
})

router.post('/book/update', (req, res) => {
    const { id, title, pages} = req.body;

    const query = `UPDATE book SET ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ['title', title, 'pageqtd', pages, 'id', id]

    pool.query(query, data, (err) => {
        if (err) {
            console.log(`Error updating data: ${err}`);
        }
        res.redirect('/view');
    })
})

router.post('/book/delete/:id', (req,res) => {
    const id = req.params.id;

    const query = `DELETE FROM book WHERE ?? = ?`;
    const data = ['id', id]

    pool.query(query, data, (err) => {
        if (err) {
            console.log(`Error deleting data: ${err}`);
        }
        res.redirect('/view');
    })
})


module.exports = router;