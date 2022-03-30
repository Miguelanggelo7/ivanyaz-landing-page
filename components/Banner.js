import styles from "../styles/Banner.module.css";
import Image from "next/image";
import ivanImg from "../public/ivanimg.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <p className={styles.text}>
          ¡<span className={styles.textSpan}>Posiciona tu negocio</span>
          <br /> con estrategias digitales
          <span className={styles.textSpan}>!</span>
        </p>
        <p className={styles.subText}>
          Impulsa tus proyectos mediante la creación de estrategias
          comunicacionales digitales.
        </p>
        <button className={styles.contactButton}>
          <div className={styles.contactText}>
            <WhatsAppIcon style={{ marginRight: "25px" }} />
            <p>Contactar</p>
          </div>
        </button>
      </div>
    </div>
  );
}
