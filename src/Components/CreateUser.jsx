import React, { useState } from "react";
import axios from "axios";
import styles from "./CreateUser.module.css";

export const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3333/users/register",
        formData
      );
      console.log("usuario cadastrado com sucesso");
      console.log(response.data);
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Erro ao cadastrar: ", error);
      alert(
        "Erro ao cadastrar usuário. Verifique os dados ou tente novamente."
      );
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.divForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.labels}>Nome: </label>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className={styles.userInputs}
              value={formData.name}
              onChange={handleChange}
            />
            <label className={styles.labels}>E-mail: </label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className={styles.userInputs}
              value={formData.email}
              onChange={handleChange}
            />
            <label className={styles.labels}>Senha: </label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className={styles.userInputs}
              value={formData.password}
              onChange={handleChange}
            />
            <button className={styles.submitBtn}>Enviar</button>
            <div className={styles.login}>
              <p className={styles.loginParagraph}>
                Já possui uma conta? <a href={"/login"} className={styles.links}>Logar-se</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
