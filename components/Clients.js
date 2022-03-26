import styles from '../styles/Clients.module.css'
import Image from 'next/image'
import client1 from '../public/logo-1.png'
import client2 from '../public/logo-2.png'
import client3 from '../public/logo-3.png'
import client4 from '../public/logo-4.png'
import client5 from '../public/logo-5.png'

export default function Clients() {
  return (
    <div className={styles.container}>
      <Image src={client1} className={styles.image} height={100}/>
      <Image src={client2} className={styles.image}/>
      <Image src={client3} className={styles.image}/>
      <Image src={client4} className={styles.image}/>
      <Image src={client5} className={styles.image}/>
    </div>
  )
}
