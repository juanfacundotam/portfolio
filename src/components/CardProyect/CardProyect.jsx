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
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const closeModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={style.containerCard}>
      <button onClick={openModal}>x</button>
      <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      />
    </div>
  );
};

export default CardProyect;
