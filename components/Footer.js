import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>IvanYaz</p>
      <div className={styles.subContainer}>
        <p>Politicas de privacidad</p>
        <p>Politicas de cookies</p>
      </div>
    </div>
  );
}
