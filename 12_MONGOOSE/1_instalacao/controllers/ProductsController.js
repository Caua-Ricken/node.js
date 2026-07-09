const Products = require('../models/Products');
const conn = require("../db/conn");

const {ObjectId} = require('mongodb');

module.exports = {

    async createProduct(req, res) {
        const { name, image,price, description } = req.body;

        try{
            const produtct = await conn
                .db()
                .collection("products")
                .insertOne({
                    name,
                    image,
                    price,
                    description
                });

        res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao criar produto" });
        }
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

    async getProductById(req, res) {
        try{
            const { id } = req.params;
            const product = await conn
                .db()
                .collection("products")
                .findOne({ _id: new ObjectId(id) });

                res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar produto por ID" });
        }

    },

    async deleteProductById(req, res) {
        const { id } = req.params;

        try{
            const product = await conn
                .db()
                .collection("products")
                .deleteOne({ _id: new ObjectId(id) });

            res.json({ message: "Produto deletado com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao deletar produto" });
        }
    },

    async updateProductById(req, res) {
        const { id } = req.params;
        const { name, image, price, description } = req.body;

        try {
            const product = await conn
                .db()
                .collection("products")
                .updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { name, image, price, description } }
                );
            res.json({ message: "Produto atualizado com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao atualizar produto" });
        }
    },

}