const express = require('express');
const router = express.Router();

  const objects = [
        {
            id: 1,
            name: 'vaso',
            price: 20.00
        },
        {
            id: 2,
            name: 'flor',
            price: 5.00
        },
        {
            id: 3,
            name: 'tijolo',
            price: 999.99
        },
        {
            id: 4,
            name: 'carro',
            price: 256.990
        },
    ];

router.get('/product/:id', (req, res) => {

    const id = req.params.id;

    const produto = objects.find((obj) => obj.id === parseInt(id));

    res.render('product', { produto });
})

router.get('/', (req, res) => {
    res.render('home', { objects });
})

module.exports = router;
