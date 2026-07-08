const Products = require('../models/Products');
const conn = require("../db/conn");

module.exports = {

    async createProduct(req, res) {
        const { name, image,price, description } = req.body;

        const product = new Products(name, image, price, description);

        await product.save();
        res.redirect('/');
    },

     async getAllProducts(req, res) {
        try {
            const products = await conn
                .db()
                .collection("products")
                .find()
                .toArray();

            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar produtos" });
        }
    },



}