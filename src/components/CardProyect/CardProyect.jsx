import React, { useState } from "react";
import style from "./CardProyect.module.css";
import ModalProyects from "../../components/ModalProyects/ModalProyects";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const proyectsImage = require.context("../../assets/proyectsImage");

const CardProyect = ({
  id,
  tittle,
  description,
  image,
  imagealt,
  tecnology,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const handleopen = () => {
    setModalShow(true);
  };

  return (
    <div className={style.containerCard}>
      <div onClick={handleopen} className={style.card} id={id}>
        <h1 id={id}>{tittle}</h1>
        <img src={proyectsImage(`./${image}.jpg`)} alt={imagealt} />
      </div>
      <ModalProyects
        className={style.modal}
        show={modalShow}
        handleopen={handleopen}
        onHide={() => setModalShow(false)}
        id={id}
        tittle={tittle}
        description={description}
        image={image}
        imagealt={imagealt}
        tecnology={tecnology}
      />
    </div>
  );
};

export default CardProyect;

