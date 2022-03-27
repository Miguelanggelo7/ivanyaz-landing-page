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
      <div className={styles.image}><Image src={client1} /></div>
      <div className={styles.image}><Image src={client2} /></div>
      <div className={styles.image}><Image src={client3} /></div>
      <div className={styles.image}><Image src={client4} /></div>
      <div className={styles.image}><Image src={client5} /></div>
    </div>
  )
}
