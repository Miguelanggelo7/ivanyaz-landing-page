import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import styles from "../styles/Drawer.module.css";

export default function Drawer({ open, onOpen, onClose, setOpen }) {
  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={onOpen}
        onClose={onClose}
      >
        <div className={styles.container}>
          <ListItem
            button
            onClick={() => setOpen(false)}
            className={styles.item}
          >
            <p className={styles.textItem}>Sobre mi</p>
          </ListItem>
          <ListItem
            button
            onClick={() => setOpen(false)}
            className={styles.item}
          >
            <p className={styles.textItem}>Servicios</p>
          </ListItem>
          <ListItem
            button
            onClick={() => setOpen(false)}
            className={styles.item}
          >
            <p className={styles.textItem}>Portafolios</p>
          </ListItem>
          <ListItem
            button
            onClick={() => setOpen(false)}
            className={styles.item}
          >
            <p className={styles.textItem}>Testimonios</p>
          </ListItem>
          <ListItem
            button
            onClick={() => setOpen(false)}
            className={styles.item}
          >
            <p className={styles.textItem}>Mi equipo</p>
          </ListItem>
          <Divider style={{ margin: "20px" }} />
          <button className={styles.button} onClick={() => setOpen(false)}>
            Asesoría gratuita
          </button>
        </div>
      </SwipeableDrawer>
    </>
  );
}
