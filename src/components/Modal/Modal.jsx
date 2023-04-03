import { useState } from "react";
import style from "./Modal.module.css";

const Modal = (props) => {
    

    return (
        <article className={`${style.modal} ${props.isOpen && style.isOpen}`}>
            <div className={style.modalContainer}>
                <button onclick={props.closeModal} className={style.modalClose}>X</button>
            </div>
        </article>
    )
}
export default Modal;