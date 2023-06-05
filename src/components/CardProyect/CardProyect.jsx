import React, { useState } from "react";
import style from "./CardProyect.module.css";
import Modal from "../Modal/Modal";
import {motion} from "framer-motion"
const proyectsImage = require.context("../../assets/proyectsImage");

const CardProyect = ({
  id,
  tittle,
  description,
  image,
  imagealt,
  link,
  tecnology,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <motion.div
        className={style.divCard}
        onClick={openModal}
        initial={{ opacity: 0.6, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <h1>{tittle}</h1>
        <img src={proyectsImage(`./${image}.webp`)} alt="imagen Proyecto" />
      </motion.div>
      <Modal
        id={id}
        tittle={tittle}
        image={image}
        link={link}
        description={description}
        tecnology={tecnology}
        isOpen={isOpen}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default CardProyect;
