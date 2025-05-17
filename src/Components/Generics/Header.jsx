import React from "react";
import styles from './Header.module.css';
import userIcon from "../../Assets/userIcon.png";

export const Header = ( {userName}) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <p className={styles.pLogo}></p>
          <nav className={styles.navUser}>
            <div className={styles.usuarioContainer}>
              <p className={styles.userName}>{userName}</p>
              <div className={styles.userDiv}>
                <img src={userIcon} alt="" className={styles.userIcon} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
