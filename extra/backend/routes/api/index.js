const express = require('express');
const pool = require('../../db/conn');
const router = express.Router();

//criar usuário
router.post('/usuarios', (req, res) => {
    const {nome} = req.body;

    const query = ('INSERT INTO usuarios (??) VALUES (?)');
    const data = ['nome', nome];

    pool.query(query, data, (err) => {
        if (err) {
            console.log(`Error inserting data: ${err}`);
            return;
        }
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    })
})

//buscar usuários
router.get('/buscar/usuarios', (req, res) => {

    const query = 'SELECT * FROM usuarios';

    pool.query(query, (err, data) => {
        if (err) {
            console.log(`Error fetching users: ${err}`);
            return;
        }
        res.json(data);
    })
})

//buscar detalhes do usuário
router.get('/detalhes/:id', (req,res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM usuarios WHERE ?? = ?';
    const data = ['id', id];

    pool.query(query, data, (err, data) => {
        if (err) {
            console.log(`Error fetching user details: ${err}`);
            return;
        }
        res.json(data[0]);
    })
})



module.exports = router;