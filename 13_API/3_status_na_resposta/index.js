const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


//rotas
app.post('/', (req, res) => {
    const {name, price} = req.body;

    if(!name) {
        res.status(422).json({message: "o campo nome é obrigatorio"})
    }

    res.status(201).json({message: `O produto ${name} com preco de ${price} foi criado com sucesso!`})
})


app.get('/', (req,res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)
