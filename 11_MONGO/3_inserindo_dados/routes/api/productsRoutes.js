const express = require('express');
const router = express.Router();

const ProductsController = require('../../controllers/productsController');

router.post('/', ProductsController.createProduct);




module.exports = router;