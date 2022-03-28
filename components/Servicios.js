import styles from "../styles/Servicios.module.css";
import Image from "next/image";
import branding from "../public/branding-image.png";
import estrategias from "../public/estrategias-image.png";
import social from "../public/social-image.png";
import marketing from "../public/marketing-image.png";
import diseño from "../public/diseño-image.png";
import posicionamiento from "../public/posicionamiento-image.png";

export default function Servicios() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <p className={styles.servicesTitle}>Servicios</p>
        <div className={styles.containerSubTitle}>
          <p className={styles.servicesSub1}>¿Tienes una idea?</p>
          <p className={styles.servicesSub2}>
            Cuéntamela y la haremos llegar lejos.
          </p>
        </div>
      </div>
      <ul className={styles.gridServices}>
        <li className={styles.card}>
          <Image src={branding} className={styles.img} />
          <p className={styles.title}>Branding</p>
          <p className={styles.subTitle}>
            Una gestión clara a través del diseño gráfico
          </p>
        </li>
        <li className={styles.card}>
          <Image src={estrategias} className={styles.img} />
          <p className={styles.title}>Estrategias Digitales</p>
          <p className={styles.subTitle}>
            Que seas exitoso en las redes sociales es nuestra meta
          </p>
        </li>
        <li className={styles.card}>
          <Image src={social} className={styles.img} />
          <p className={styles.title}>Social Media</p>
          <p className={styles.subTitle}>
            Generamos contenido de forma estratégica y genial
          </p>
        </li>
        <li className={styles.card}>
          <Image src={marketing} className={styles.img} />
          <p className={styles.title}>Marketing Digital</p>
          <p className={styles.subTitle}>
            Usamos todas las herramientas digitales para impulsar tu negocio o
            marca en internet
          </p>
        </li>
        <li className={styles.card}>
          <Image src={diseño} className={styles.img} />
          <p className={styles.title}>Diseño Web</p>
          <p className={styles.subTitle}>
            Realizamos tu local virtual para darte a conocer y canalizar la
            interacción del público
          </p>
        </li>
        <li className={styles.card}>
          <Image src={posicionamiento} className={styles.img} />
          <p className={styles.title}>Posicionamiento</p>
          <p className={styles.subTitle}>
            Aplicamos estrategias SEO para posicionarte ante tu público meta
          </p>
        </li>
      </ul>
    </div>
  );
}
