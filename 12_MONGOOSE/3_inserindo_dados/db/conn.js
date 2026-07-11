const mongoose = require("mongoose");

const connectDataBase = async () => {
    await mongoose.connect('mongodb://localhost:27017/testemongoose');
    console.log('Conectado ao banco de dados Mongoose com sucesso!');
}

connectDataBase().catch((error) => console.log(error));

module.exports = mongoose;