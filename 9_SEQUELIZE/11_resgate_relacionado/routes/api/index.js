const express = require('express');
const router = express.Router();
const User = require('./../../models/User');
const Address = require('./../../models/Address');

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

router.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: {id: id}});

    res.json(user);
})

router.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({ where: {id: id}});

    res.redirect('/');
})

router.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ include: Address, where: {id: id}});
    res.json(user);
})

router.post('/users/update', async (req, res) => {
    let { id, name, occupation, newsletter } = req.body;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    const userData = {
        name,
        occupation,
        newsletter
    }

    await User.update(userData, { where: {id: id}});

    res.redirect('/');
});

router.post('/address/create', async (req, res) => {
    const { UserId, street, number, city } = req.body;

    const address = {
        UserId,
        street,
        number,
        city
    };

    await Address.create(address);
    res.redirect(`/edituser/${UserId}`);
});

module.exports = router;