import styles from '../styles/ContactMe.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <p className={styles.title}>Contactame</p>
        <p>Y empecemos a llevar a cabo tus ideas.</p>
        <button className={styles.button}>
          <WhatsAppIcon />
          Ir a Whatsapp
        </button>
      </div>
      <div className={styles.imageContainer}>

      </div>
    </div>
  )
}
