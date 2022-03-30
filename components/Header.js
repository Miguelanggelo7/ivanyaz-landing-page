import styles from "../styles/Header.module.css";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Drawer from "./Drawer";
import { Link as LinkS } from 'react-scroll';

export default function Header() {
  const handleDrawer = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <p className={styles.title}>IvanYaz</p>
      <div className={styles.containerButtons}>
        <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-120} to="sobremi" className={styles.link}>Sobre mi</LinkS>
        <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-90} to="servicios" className={styles.link}>Servicios</LinkS>
        <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-190} to="portafolios" className={styles.link}>Portafolios</LinkS>
        <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-180} to="testimonios" className={styles.link}>Testimonios</LinkS>
        <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-120} to="miequipo" className={styles.link}>Mi equipo</LinkS>
        <button className={styles.button}>Asesoría gratuita</button>
      </div>
      <div className={styles.menuIcon}>
        <IconButton onClick={handleDrawer}>
          <Menu style={{ fontSize: "40", color: "#000" }} />
        </IconButton>
      </div>
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
      />
    </div>
  );
}
