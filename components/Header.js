import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>IvanYaz</p>
      <div className={styles.containerButtons}>
        <a className={styles.link}>Sobre mi</a>
        <a className={styles.link}>Servicios</a>
        <a className={styles.link}>Portafolios</a>
        <a className={styles.link}>Testimonios</a>
        <a className={styles.link}>Mi equipo</a>
        <button className={styles.button}>
            Asesoría gratuita
        </button>
      </div>
    </div>
  )
}
