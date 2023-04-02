import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./ModalProyects.module.css";

const ModalProyects = (props) => {
  return (
    <div>
      <Modal
        className={style.divModal}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton className={style.header}>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>{props.tittle}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={style.body}>
            <h4>Desciption: </h4>
            <p>{props.description}</p>
          </Modal.Body>
          <Modal.Footer className={style.footer}>
            <h2>Tecnologies: </h2>
            <ul className={style.lista}>
              {props.tecnology.map((icon) => {
                return <li className={style.item}>{icon}</li>;
              })}
            </ul>
            <Button onClick={props.onHide} className={style.button}>Sitio Web</Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalProyects;
