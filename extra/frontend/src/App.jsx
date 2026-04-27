/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function App() {
  const [nome, setNome] = useState("")
  const navigate = useNavigate()

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
    navigate('/usuarios')
  }

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
    </div>
  )
}

export default App