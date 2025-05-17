import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import styles from './ListarReceitas.module.css';
import Copyrights from "../Generics/Copyrights";
import { Header } from "../Generics/Header";
import { Recipes } from "../Generics/RecipesCard";

export const ListarReceitas = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [userRecipes, setUserRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const tokenDecoded = jwtDecode(token);
        const userId = tokenDecoded.id;

        axios
          .get(`http://localhost:3333/recipes/user/${userId}`)
          .then((response) => {
            setNomeUsuario(response.data.name);
            setUserRecipes(response.data.recipes);
          })
          .catch((error) => {
            console.error("Erro ao buscar: ", error);
          });
      } catch (error) {
        console.error("Erro ao decodificar", error);
      }
    }
  }, []);


  const handleBack = () => {
    navigate('/logado')
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <Header userName={nomeUsuario} />
        <div className={styles.titlePage}>
          <p className={styles.title}>Receitas</p>
        </div>
        <div className={styles.voltar}>
          <button className={styles.voltarBtn} onClick={handleBack}>Voltar</button>
        </div>
        <div className={styles.receitas}>
          {userRecipes.map((receita) => (
            <Recipes
              key={receita.id}
              id={receita.id}
              title={receita.title}
              category={receita.category}
              dificulty={receita.dificulty}
            />
          ))}
        </div>
        <Copyrights />
      </div>
    </>
  );
};
