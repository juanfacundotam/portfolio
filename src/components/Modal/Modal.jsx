import style from "./Modal.module.css";
import { motion } from "framer-motion";

const proyectsImage = require.context("../../assets/proyectsImage");

const Modal = ({
  id,
  isOpen,
  closeModal,
  tittle,
  link,
  image,
  description,
  imageAlt,
  tecnology,
}) => {
  const handleModalContainerClick = (event) => {
    event.stopPropagation();
  };

  return (
    <article
      onClick={closeModal}
      className={`${style.modal} ${isOpen && style.isOpen}`}
    >
      <motion.div
        initial={{ opacity: 0.8, y: "-60px" }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: "0px", opacity: 1 }}
        className={style.modalContainer}
        onClick={handleModalContainerClick}
      >
        <button onClick={closeModal} className={style.modalClose}>
          X
        </button>
        <h1>{tittle}</h1>
        <img src={proyectsImage(`./${image}.webp`)} alt="Imagen Proyecto" />
        <p>{description}</p>
        <div>
          <h4>Tecnologías</h4>
          <ul className={style.list}>
            {tecnology.map((tecno, index) => {
              return <li className={style.item} key={index} >{tecno}</li>;
            })}
          </ul>
        </div>
        <a href={link} className={style.btnWeb} target="_blank">Web Site</a>
      </motion.div>
    </article>
  );
};
export default Modal;
