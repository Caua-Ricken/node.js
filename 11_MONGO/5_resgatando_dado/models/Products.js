const conn = require("../db/conn");

class Products {

    constructor(name, image, price, description) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }
};

module.exports = Products;