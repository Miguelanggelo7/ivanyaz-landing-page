import styles from '../styles/ContactMe.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import Image from 'next/image'
import phoneImg from '../public/phone-image.png'

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
        <div className={styles.tiktok_instagram}>
          <a className={styles.child}><i class='fab fa-tiktok fa-2x'></i> @ivanyaz</a>
          <a className={styles.child}><InstagramIcon className={styles.icons}/> @ivanyaz </a>
        </div>
        <div className={styles.facebook_telegram}>
          <a className={styles.child}><FacebookIcon className={styles.icons} /> /IvanDeJesusYanez</a>
          <a className={styles.child}><TelegramIcon className={styles.icons} /> t.me/VenezolanosEnAlemania</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={phoneImg} className={styles.image}/>
      </div>
    </div>
  )
}
