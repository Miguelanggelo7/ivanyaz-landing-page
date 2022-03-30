import styles from "../styles/AboutMe.module.css";
import Image from "next/image";
import ivan from "../public/ivan-image-2.png";

export default function AboutMe() {
  return (
    <div className={styles.container} id="sobremi">
      <div className={styles.contImg}>
        <Image src={ivan} className={styles.img} />
      </div>
      <div className={styles.contText}>
        <div className={styles.contTitle}>
          <p className={styles.title}>¿Por qué trabajar conmigo?</p>
          <p className={styles.subTitle}>
            Porque me interesa el crecimiento de tu negocio.
          </p>
        </div>
        <p className={styles.text}>
          Si tienes una idea de negocio, un emprendimiento, marca o empresa,
          nosotros podemos ayudarte de manera eficaz a través de la herramienta
          más poderosa para mostrarnos al mundo de las redes sociales y la web,
          para así posicionarnos en el campo que deseamos.
          <br />
          <br />
          En IvanYaz te ayudamos con estrategias, gestión de social media y mas
          media, de esta forma tu conseguirá impulsarse con éxito y lograr así
          los resultados que queremos...
          <br />
          <br />
          No perdemos de vista nuestros objetivos tanto en comunicación política
          como comunicación digital. Hoy en día la era digital es una necesidad.
        </p>
        <div className={styles.contFrase}>
          <p>
            “El diseño no es solo lo que se ve o lo que se siente. Diseño es
            como funciona”
          </p>
          <p style={{ fontWeight: "bold" }}>- Steve Jobs</p>
        </div>
      </div>
    </div>
  );
}
