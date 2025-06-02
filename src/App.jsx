import styles from './App.module.css';

import { useNavigate } from 'react-router-dom';
import Copyrights from './Components/Generics/Copyrights';


function App() {
  const navigate = useNavigate();

    const handleRegister = ()=>{
        navigate('/registrar')
    }
     const handleLogin = ()=>{
        navigate('/login')
    }

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.ButtonsDiv}>
        <div className={styles.mainButtons}>
          <button className={styles.registerBtn} onClick={handleRegister}>Registrar-se</button>
          <button className={styles.loginBtn} onClick={handleLogin}>Logar-se</button>
        </div>
        </div>
        <Copyrights/>
      </div>
    </>
  )
}

export default App;
