import React from 'react'
import { useState, useEffect } from 'react'

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([])


  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        const res = await fetch("http://localhost:3000/buscar/usuarios")
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        console.log(`Error fetching users: ${err}`);
      }
    }
    buscarUsuarios()
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>

      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            {user.nome} - <a href={`/detalhes/${user.id}`}>Ver Detalhes</a></li>
        ))}
      </ul>

      <a href="/">Voltar para Home</a>
    </div>
  )
}

export default Usuarios