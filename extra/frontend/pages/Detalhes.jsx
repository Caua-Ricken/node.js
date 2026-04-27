import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detalhes = () => {
    const [usuario, setUsuario] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const buscarUsuario = async () => {
            try {
                const res = await fetch(`http://localhost:3000/detalhes/${id}`)
                const data = await res.json();
                setUsuario(data);
            } catch (err) {
                console.log(`Error fetching user details: ${err}`);
            }
        }
        buscarUsuario();
    }, [])
  return (
    <div>
        <h1>Detalhes do Usuário</h1>

          {usuario ? (
              <p>Nome: {usuario.nome}</p>
          ) : (
              <p>Carregando...</p>
          )}

        <a href="/usuarios">Voltar para Lista de Usuários</a>
    </div>
  )
}

export default Detalhes