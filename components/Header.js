import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerTitle}>IvanYaz</p>
      <div className={styles.containerButtonsHeader}>
        <a>Sobre mi</a>
        <a>Sobre mi</a>
        <a>Sobre mi</a>
      </div>
    </div>
  )
}
