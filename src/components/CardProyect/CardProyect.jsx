import React, { useState } from "react";
import style from "./CardProyect.module.css";
import Modal from "../Modal/Modal";

const proyectsImage = require.context("../../assets/proyectsImage");

const CardProyect = ({
  id,
  tittle,
  description,
  image,
  imagealt,
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
    <div className={style.containerCard}>
      <button onClick={openModal}>x</button>
      <Modal
      tittle={tittle}
      isOpen={isOpen}
      closeModal={closeModal}
      setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default CardProyect;
