import Copyrights from './Generics/Copyrights';
import Cards from './Generics/Cards';
import styles from './Logado.module.css';
import reciptsIcon from "../Assets/forkKnife.png"
import userIcon from "../Assets/userIcon.png"

 export const Logado = () => {
  return (
    <>
      <div className={styles.divPrincipal}>
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                {/* <img src="" alt="" /> */}
                <p className={styles.pLogo}></p>
                <nav className={styles.navUser}>
                  <div className={styles.usuarioContainer}>
                    <p>NomeUser</p>
                    <div className={styles.userDiv}>
                      <img src={userIcon} alt="" className={styles.userIcon}/>
                    </div>
                  </div>
                </nav>
            </div>
          </div>
          <div className={styles.mainContent}>
            <Cards title="Criar Receitas" img={reciptsIcon}/>
            <Cards title="Favoritos" img={reciptsIcon}/>
          </div>
        <Copyrights className={styles.copyrights}/>
      </div> 
    </>
  )
}
