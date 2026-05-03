const express = require('express');
const router = express.Router();
const User = require('./../../models/User');

router.post('/insert', async (req, res) => {
    let { name, occupation, newsletter } = req.body;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    await User.create({ name, occupation, newsletter })

    res.redirect('/');
})

router.get('/users', async (req, res) => {

    const users = await User.findAll({ raw: true});
    res.json(users);

})

module.exports = router;