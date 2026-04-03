const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// "banco fake"
let usuarios = []

// GET - listar usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios)
})

// POST - criar usuário
app.post('/usuarios', (req, res) => {
  const { nome } = req.body

  const novoUsuario = {
    id: Date.now(),
    nome
  }

  usuarios.push(novoUsuario)

  res.json(novoUsuario)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})