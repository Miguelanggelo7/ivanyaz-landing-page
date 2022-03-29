import styles from "../styles/ContactMe.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import Image from "next/image";
import phoneImg from "../public/phone-image.png";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <p className={styles.title}>Contactame</p>
        <p className={styles.subTitle}>
          Y empecemos a llevar a cabo tus ideas.
        </p>
        <div className={styles.smallImageContainer}>
          <Image src={phoneImg} height={500} width={300} />
        </div>
        <button className={styles.button}>
          <WhatsAppIcon />
          <p>Ir a Whatsapp</p>
        </button>

        <div className={styles.iconsContainer}>
          <div className={styles.tiktok_instagram}>
            <a
              className={styles.child}
              target="_blank"
              href="https://www.tiktok.com/@ivanyaz"
              rel="noopener noreferrer"
            > 
              <i
                className="fab fa-tiktok fa-2x"
                style={{ marginLeft: "7px", marginRight: "7px" }}
              ></i>
              @<p>ivanyaz</p>
            </a>
            <a
              className={styles.child}
              style={{ marginLeft: "20px" }}
              target="_blank"
              href="https://www.instagram.com/ivanyaz/"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={styles.icons} />@<p>ivanyaz</p>
            </a>
          </div>
          <div className={styles.facebook_telegram}>
            <a
              className={styles.child}
              target="_blank"
              href="https://www.facebook.com/IvanDeJesusYanez"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={styles.icons} />
              <p>/IvanDeJesusYanez</p>
            </a>
            <a
              className={styles.child}
              target="_blank"
              href="https://t.me/VenezolanosEnAlemania"
              rel="noopener noreferrer"
            >
              <TelegramIcon className={styles.icons} />
              <p>t.me/VenezolanosEnAlemania</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bigImageContainer}>
        <Image src={phoneImg} height={600} />
      </div>
    </div>
  );
}
