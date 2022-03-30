import styles from "../styles/Team.module.css";
import Image from "next/image";
import team1 from "../public/team-image-1.jpg";
import team2 from "../public/team-image-2.jpg";
import team3 from "../public/team-image-3.jpg";
import team4 from "../public/team-image-4.jpg";

export default function Team() {
  return (
    <div className={styles.container} id="miequipo">
      <p className={styles.title}>El equipo</p>
      <div className={styles.membersContainer}>
        <div className={styles.member}>
          <Image src={team1} />
          <p className={styles.name}>Daniel Gutierrez</p>
          <p className={styles.role}>Comunicador</p>
        </div>
        <div className={styles.member}>
          <Image src={team2} />
          <p className={styles.name}>Samantha Gutierrez</p>
          <p className={styles.role}>Diseñador</p>
        </div>
        <div className={styles.member}>
          <Image src={team3} />
          <p className={styles.name}>José Gutierrez</p>
          <p className={styles.role}>Programador</p>
        </div>
        <div className={styles.member}>
          <Image src={team4} />
          <p className={styles.name}>Sophia Gutierrez</p>
          <p className={styles.role}>Comunicador</p>
        </div>
      </div>
    </div>
  );
}
