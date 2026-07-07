const Products = require('../models/Products');

module.exports = {

    async createProduct(req, res) {
        const { name, price, description } = req.body;

        const product = new Products(name, price, description);

        await product.save();
        res.redirect('/');
    },


}