import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import axios from "axios";

import Copyrights from "../Generics/Copyrights";
import { Header } from "../Generics/Header";
import styles from "./CreateRecipe.module.css";

export const CreateRecipe = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const tokenDecoded = jwtDecode(token);
        const userId = tokenDecoded.id;

        axios
          .get(`http://localhost:3333/users/${userId}`)
          .then((response) => {
            setNomeUsuario(response.data.name);
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
      <div className={styles.MainContent}>
        <Header userName={nomeUsuario} />
        <div className={styles.formDiv}>
          <form action="" className={styles.form}>
            <div className={styles.titleDiv}>
              <p className={styles.title}>Cadastrar Receita</p>
            </div>
            <label htmlFor="" className={styles.nameL}>Nome: </label>
            <input type="text" className={styles.userInputs} placeholder="Nome"/>
            <label htmlFor="" className={styles.ingredientesL}>Ingredientes</label>
            <input type="text" className={styles.userInputs} placeholder="Ingredientes"/>
            <label htmlFor="" className={styles.passosL}>Passos:</label>
            <textarea name="" id="" className={styles.textArea}></textarea>
            <label htmlFor="" className={styles.categoriaL}>Categoria</label>
            <input type="text" className={styles.userInputs} placeholder="Categoria"/>
            <select name="" id="" className={styles.selection}>
              <option value="">Dificuldade</option>
              <option value="easy">Fácil</option>
              <option value="normal">Médio</option>
              <option value="hard">Difícil</option>
            </select>
            <div className={styles.divisor}></div>
            <div className={styles.btn}>
              <button className={styles.voltar} onClick={handleBack}>Voltar</button>
              <button className={styles.cadastrar} >Cadastrar</button>
            </div>
          </form>
        </div>
        <Copyrights />
      </div>
    </>
  );
};
