const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/soma', (req, res) => {
    console.log(req.body)
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    const resultado = n1 + n2;

    const log =  `
    Soma: ${n1} + ${n2} = ${resultado}
    Data: ${new Date().toISOString()}
    ------------------------------\n`;

    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo de log:', err);
        }
    })

    res.redirect(`/web/resultado?value=${resultado}`);
});

module.exports = router;