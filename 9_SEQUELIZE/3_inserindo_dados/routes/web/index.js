const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../../templates');

router.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'home.html'));
})

router.get('/adduser', (req, res) => {
    res.sendFile(path.join(basePath, 'adduser.html'));
});



module.exports = router;