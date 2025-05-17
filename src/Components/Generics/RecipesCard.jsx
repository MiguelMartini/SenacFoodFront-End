import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect ,useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './RecipesCard.module.css';

export const Recipes = ({id, title, category, dificulty}) => {
  const [nomeReceita, setNomeReceita] = useState("");
  // const [ingredientes, setingredientes] = useState("");
  // const [passos, setPassos] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dificuldade, setdificuldade] = useState("");

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    

    if(token){
      try{
        axios
        .get(`http://localhost:3333/recipes/1`)
        .then((response) => {
          console.log(response)
          setNomeReceita(response.data.title);
          setCategoria(response.data.category);
          setdificuldade(response.data.difficulty);
        })
        .catch((error) => {
          console.error("Erro", error);
        });
      } catch(error){
        console.error("Error: ", error)
      }
    }
  }, []);
  const goRecipe = () => {
    navigate('/receita')
  }


  return (
    <>
    <div className={styles.cardContent} onClick={goRecipe}>
      <p className={styles.paragrafo}>{title}</p>
      <div className={styles.divisor}></div>
      <p className={styles.paragrafo}>{category}</p>
      <div className={styles.divisor}></div>
      <p className={styles.paragrafo}>{dificulty}</p>
    </div>
    </>
  )
}
