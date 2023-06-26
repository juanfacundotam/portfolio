import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./BasicModal.module.css";
import { motion } from "framer-motion";
const proyectsImage = require.context("../../assets/proyectsImage");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 650,
  bgcolor: "background.paper",
  color: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  background: "linear-gradient(315deg, #282c34, #2a2c53)",
  borderRadius: 5,
  // p: 4,
};

export default function BasicModal({
  id,
  tittle,
  description,
  image,
  imagealt,
  link,
  tecnology,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.divCards}>
      <motion.div
        className={styles.divCard}
        initial={{ opacity: 0.6, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        onClick={handleOpen}
      >
        {/* <h1>{tittle}</h1> */}
        <img className={styles.image} src={proyectsImage(`./${image}.webp`)} alt="Imagen Proyecto" />

      </motion.div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <motion.div
        initial={{ opacity: 0.8, y: "-60px" }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: "0px", opacity: 1 }}
        className={style.modalContainer}

      > */}
          <div className={styles.divModal}>
            <h1>{tittle}</h1>
            <img className={styles.image} src={proyectsImage(`./${image}.webp`)} alt="Imagen Proyecto" />
            <div className={styles.divDescription}>
            <p className={styles.description}>{description}</p>
            </div>
            <div>
              <h4 className={styles.listTitle} >Tecnologías</h4>
              <ul className={styles.list}>
                {tecnology.map((tecno, index) => {
                  return (
                    <li className={styles.item} key={index}>
                      {tecno}
                    </li>
                  );
                })}
              </ul>
            </div>
            <a href={link} className={styles.btnWebs} target="_blank">
              Web Site
            </a>
          </div>
          {/* </motion.div> */}
        </Box>
      </Modal>
    </div>
  );
}



