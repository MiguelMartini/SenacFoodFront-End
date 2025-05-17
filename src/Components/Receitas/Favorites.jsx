import React from 'react'
import styles from './Favorites.module.css'
import Copyrights from '../Generics/Copyrights'
import { Header } from '../Generics/Header'


export const Favorites = () => {
  return (
    <>
        <div className={styles.mainDiv}>
            <Header/>
            <h1>Salve</h1>
            <Copyrights/>
        </div>
    </>
  )
}
