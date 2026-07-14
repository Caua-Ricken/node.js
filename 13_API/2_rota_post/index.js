const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


//rotas
app.post('/', (req, res) => {
    const {name, price} = req.body;

    res.json({message: `O produto ${name} com preco de ${price} foi criado com sucesso!`})
})


app.get('/', (req,res) => {
    res.json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)
