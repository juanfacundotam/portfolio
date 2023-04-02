import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./ModalProyects.module.css";

const ModalProyects = (props) => {
  return (
    <div>
      <Modal
      className="text-white"
        // className={style.modalContainer}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          {/* <Modal.Header closeButton className="divModalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>{props.tittle}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="divModalBody">
            <h4>Description: </h4>
            <p>{props.description}</p>
          </Modal.Body>
          <Modal.Footer  >
            <div className="divModalFooter">
            <h2>Tecnologies: </h2>
            <ul className={style.lista}>
              {props.tecnology.map((icon) => {
                return <li className={style.iconos} >{icon}</li>;
              })}
            </ul>
            </div>
            <Button onClick={props.onHide} className={style.button}><span>Sitio Web</span></Button>
          </Modal.Footer> */}
          <div className={style.divModal}>
            <div className={style.modal}>
            <h1>modal</h1>
            <h1>modal</h1>
            <h1>modal</h1>
            </div>
          </div>
      </Modal>
    </div>
  );
};

export default ModalProyects;
