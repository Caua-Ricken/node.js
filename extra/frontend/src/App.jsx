/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [nome, setNome] = useState("")

  // buscar usuários
  const buscarUsuarios = async () => {
    const res = await fetch("http://localhost:3000/usuarios")
    const data = await res.json()
    setUsuarios(data)
  }

  // criar usuário
  const criarUsuario = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome })
    })

    setNome("")
    buscarUsuarios()
  }

  useEffect(() => {
    buscarUsuarios()
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuários</h1>

      <form onSubmit={criarUsuario}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite um nome"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default App