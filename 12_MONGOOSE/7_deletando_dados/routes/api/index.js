const express = require('express');
const router = express.Router();

const produscts = require('./productsRoutes');
router.use('/products', produscts);


module.exports = router;