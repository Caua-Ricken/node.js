const express = require('express');
const router = express.Router();

const ProductsController = require('../../controllers/productsController');

router.post('/', ProductsController.createProduct);

router.get('/', ProductsController.getAllProducts);

router.get('/:id', ProductsController.getProductById);




module.exports = router;