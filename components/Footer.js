import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerTitle} >IvanYaz</p>
      <div className={styles.footerSubContainer}>
        <p>Politicas de privacidad</p>
        <p>Politicas de cookies</p>
      </div>
    </div>
  )
}
