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

module.exports = router;