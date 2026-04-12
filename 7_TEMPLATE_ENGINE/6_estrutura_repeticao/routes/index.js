const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {

    const itens = ['item1', 'item2', 'item3', 'item4', 'item5'];

    res.render('dashboard', { itens});
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