import styles from "../styles/Header.module.css";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Drawer from "./Drawer";

export default function Header() {
  const handleDrawer = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <p className={styles.title}>IvanYaz</p>
      <div className={styles.containerButtons}>
        <a className={styles.link}>Sobre mi</a>
        <a className={styles.link}>Servicios</a>
        <a className={styles.link}>Portafolios</a>
        <a className={styles.link}>Testimonios</a>
        <a className={styles.link}>Mi equipo</a>
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
