const express = require('express');
const router = express.Router();

const produscts = require('../api/productsRoutes');
router.use('/products', produscts);


module.exports = router;