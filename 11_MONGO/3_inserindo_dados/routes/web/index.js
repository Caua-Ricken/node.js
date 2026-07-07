const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../../views');

router.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'home.html'));
});

router.get('/products', (req, res) => {
    res.sendFile(path.join(basePath, 'cadastrar.html'));
});


module.exports = router;