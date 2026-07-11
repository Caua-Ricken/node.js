const Products = require('../models/Products');
const conn = require("../db/conn");

const {ObjectId} = require('mongodb');

module.exports = {

    async createProduct(req, res) {
        const { name, image,price, description } = req.body;

        try{
            const product = new Products({
                name,
                image,
                price,
                description
            });
            await product.save();

        res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao criar produto" });
        }
    },

    async getAllProducts(req, res) {
        try {
            const product = await Products.find();
            res.json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar produtos" });
        }
    },
    

}