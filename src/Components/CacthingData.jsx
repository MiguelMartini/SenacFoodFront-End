import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CacthingData = () => {

    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3333/users/listarUsers")
        .then((response) => {
            console.log("Dados recebidos", response.data);
            setUsuarios(response.data)
        })
        .catch(error => {
            console.error("Erro ao buscar dados: ", error);
        })
    }, []);

    const handleRegister = ()=>{
        navigate('/registrar')
    }
     const handleLogin = ()=>{
        navigate('/login')
    }

  return (
    <div>
        <h1>Usuários:</h1>
        {usuarios.map((usuario) => {
            return <p key={usuario.id}>{usuario.name} | {usuario.email} </p>
        })}
        <button onClick={handleRegister}>Registrar-se</button>
        <button onClick={handleLogin}>Logar-se</button>
    </div>
  )
}

export default CacthingData;