import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import styles from "../styles/Drawer.module.css";
import { Link as LinkS } from 'react-scroll';

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
          <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-93} to="sobremi">
            <ListItem
              button
              onClick={() => setOpen(false)}
              className={styles.item}
            >
              <p className={styles.textItem}>Sobre mi</p>
            </ListItem>
          </LinkS>
          <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-93} to="servicios">
            <ListItem
              button
              onClick={() => setOpen(false)}
              className={styles.item}
            >
              <p className={styles.textItem}>Servicios</p>
            </ListItem>
          </LinkS>
          <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-190} to="portafolios">
            <ListItem
              button
              onClick={() => setOpen(false)}
              className={styles.item}
            >
              <p className={styles.textItem}>Portafolios</p>
            </ListItem>
          </LinkS>
          <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-93} to="testimonios">
            <ListItem
              button
              onClick={() => setOpen(false)}
              className={styles.item}
            >
              <p className={styles.textItem}>Testimonios</p>
            </ListItem>
          </LinkS>
          <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-93} to="miequipo">
            <ListItem
              button
              onClick={() => setOpen(false)}
              className={styles.item}
            >
              <p className={styles.textItem}>Mi equipo</p>
            </ListItem>
          </LinkS>
          <Divider style={{ margin: "20px" }} />
          <button className={styles.button} onClick={() => setOpen(false)}>
            Asesoría gratuita
          </button>
        </div>
      </SwipeableDrawer>
    </>
  );
}
