import styles from '../styles/Home.module.css'
import { IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerTitle}>IvanYaz</p>
      <div className={styles.containerButtonsHeader}>
        <a className={styles.linkHeader}>Sobre mi</a>
        <a className={styles.linkHeader}>Servicios</a>
        <a className={styles.linkHeader}>Portafolios</a>
        <a className={styles.linkHeader}>Testimonios</a>
        <a className={styles.linkHeader}>Mi equipo</a>
        <button className={styles.buttonHeader}>
            Asesoría gratuita
        </button>
      </div>
      <div className={styles.menuIconHeader}>
        <IconButton>
          <Menu style={{fontSize: "40", color: "#000"}} />
        </IconButton>
      </div>
    </div>
  )
}
