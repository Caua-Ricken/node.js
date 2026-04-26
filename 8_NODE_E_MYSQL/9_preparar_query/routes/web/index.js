const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../../templates');

router.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'home.html'));
})

router.get('/view', (req, res) => {
    res.sendFile(path.join(basePath, 'books.html'))
})

router.get('/viewbooks', (req, res) => {
    res.sendFile(path.join(basePath, 'bookUnity.html'))
})

router.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(basePath, 'editbook.html'))
})


module.exports = router;