const express = require('express');
const router = express.Router();

const ProductsController = require('../../controllers/productsController');

router.post('/', ProductsController.createProduct);

router.get('/', ProductsController.getAllProducts);
/*
router.get('/:id', ProductsController.getProductById);

router.delete('/:id', ProductsController.deleteProductById);

router.post('/edit/:id', ProductsController.updateProductById);
*/



module.exports = router;