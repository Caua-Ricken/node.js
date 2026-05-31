const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../../view');

router.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'home.html'));
});

router.get('/view', (req, res) => {
    res.sendFile(path.join(basePath, 'allTasks.html'));
});

router.get('/details/:id', (req, res) => {
    res.sendFile(path.join(basePath, 'detalhes.html'));
});

router.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(basePath, 'edit.html'));
});

module.exports = router;