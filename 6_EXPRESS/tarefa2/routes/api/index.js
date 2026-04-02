const express = require('express');
const router = express.Router();
const path = require('path');


router.post('/soma', (req, res) => {
    console.log(req.body)
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    const resultado = n1 + n2;
    console.log(`O resultado da soma é ${resultado}`);
    res.redirect(`/web/resultado?resultado=${resultado}`);
});

router.get('/result', (req, res) => {
    res.json({resultado});
})

module.exports = router;