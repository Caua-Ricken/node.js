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

    async getProductById(req, res) {
        const { id } = req.params;
    
        try {
            const product = await Products.findById(id);

            if(!product) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }
            res.json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar produto" });
        }
    },

    async updateProductById(req, res) {
        const { id } = req.params;
        const { name, image, price, description } = req.body;

        try {
            const product = await Products.updateOne({_id: id}, {
                name,
                image,
                price,
                description
            });
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao atualizar produto" });
        }
    },
    

}