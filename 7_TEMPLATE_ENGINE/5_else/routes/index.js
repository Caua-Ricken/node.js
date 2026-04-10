const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
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