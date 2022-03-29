import styles from "../styles/Testimonios.module.css";
import Image from "next/image";
import testIcon from "../public/testimonio-icon.png";
import testPerson from "../public/testimonio-image.jpg";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";

export default function Testimonios() {
  const CarouselUI = ({ children }) => (
    <div className={styles.carrusel}>{children}</div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <div className={styles.container}>
      <div className={styles.testCenter}>
        <Image src={testIcon} className={styles.icon} />
        <Carousel defaultWait={7000}>
          <Fade>
            <p className={styles.textTestimonio}>
              &ldquo;Este es el testimonio de la persona 1&ldquo;
            </p>
            <Image src={testPerson} className={styles.person} />
            <p className={styles.name}>persona 1</p>
          </Fade>
          <Fade>
            <p className={styles.textTestimonio}>
              &ldquo;Este es el
              tesasdflaksjdfñlsdajflñsadkjfasñdlkfjañsdlfkjsadñfjksdañlfkjasdñflkadsjñlaksdfjñadlskfjasdlktimonio
              de la persona 2&ldquo;
            </p>
            <Image src={testPerson} className={styles.person} />
            <p className={styles.name}>persona 2</p>
          </Fade>
          <Fade>
            <p className={styles.textTestimonio}>
              &ldquo;Este es el testimonio de la persona 3&ldquo;
            </p>
            <Image src={testPerson} className={styles.person} />
            <p className={styles.name}>persona 3</p>
          </Fade>
          <Fade>
            <p className={styles.textTestimonio}>
              &ldquo;Este es el testimonio de la persona 4&ldquo;
            </p>
            <Image src={testPerson} className={styles.person} />
            <p className={styles.name}>persona 4</p>
          </Fade>
          <Fade>
            <p className={styles.textTestimonio}>
              &ldquo;Este es el testimonio de la persona 5&ldquo;
            </p>
            <Image src={testPerson} className={styles.person} />
            <p className={styles.name}>persona 5</p>
          </Fade>
        </Carousel>
      </div>
    </div>
  );
}
