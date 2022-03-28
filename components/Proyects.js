import styles from '../styles/Proyects.module.css'
import Image from 'next/image'
import proyect1 from '../public/proyectos-image-1.jpg'
import proyect2 from '../public/proyectos-image-2.jpg'
import proyect3 from '../public/proyectos-image-3.jpg'


export default function Proyects() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Proyectos</p>
      <div className={styles.subContainer}>
        <div className={styles.proyects}>
          <Image src={proyect1}/>
          <p className={styles.proyectName}>Nombre negocio</p>
          <p className={styles.proyectRole}>Diseño Web</p>
        </div>
        <div className={styles.proyects}>
          <Image src={proyect2}/>
          <p className={styles.proyectName}>Nombre negocio</p>
          <p className={styles.proyectRole}>Social Media</p>
        </div>
        <div className={styles.proyects}>
          <Image src={proyect3}/>
          <p className={styles.proyectName}>Nombre negocio</p>
          <p className={styles.proyectRole}>Branding | Social Media</p>
        </div>
        <div className={styles.proyects}>
          <Image src={proyect2}/>
          <p className={styles.proyectName}>Nombre negocio</p>
          <p className={styles.proyectRole}>Diseño Web</p>
        </div>
        <div className={styles.proyects}>
          <Image src={proyect1}/>
          <p className={styles.proyectName}>Nombre negocio</p>
          <p className={styles.proyectRole}>Social Media</p>
        </div>
        <div className={styles.proyects}>
          <Image src={proyect3}/>
          <p className={styles.proyectName}>Nombre negocio</p>
          <p className={styles.proyectRole}>Branding | Social Media</p>
        </div>
      </div>
    </div>
  )
}
