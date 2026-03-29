const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
})

router.get('/mostrar', (req, res) => {
    res.sendFile(`${basePath}/mostrar.html`);
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/home_routes.html`)
})

module.exports = router;

