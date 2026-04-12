const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {

    const itens = ['item1', 'item2', 'item3', 'item4', 'item5'];

    res.render('dashboard', { itens});
})

router.get('/poster', (req, res) => {
    const poster = {
        title: 'o poderoso chefão',
        category: 'drama',
        body: 'filme de drama sobre mafia italiana',
        comments: 4,
    }

    res.render('poster', { poster});
})

router.get('/', (req, res) => {

    const user = {
        name: 'joão',
        surname: 'silva',
    }

    const auth = true;

    const aproved = true;

    res.render('home', { usuario: user, auth, aproved});
})



module.exports = router;