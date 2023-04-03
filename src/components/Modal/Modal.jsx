import style from "./Modal.module.css";
import { motion } from "framer-motion";
const proyectsImage = require.context("../../assets/proyectsImage");

const Modal = ({
  isOpen,
  closeModal,
  tittle,
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
        <img src={proyectsImage(`./${image}.jpg`)} alt={imageAlt} />
        <p>{description}</p>
        <div>
          <ul className={style.list}>
            {tecnology.map((tecno) => {
              return <li className={style.item}>{tecno}</li>;
            })}
          </ul>
        </div>
        <button className={style.btnWeb}>Web Site</button>
      </motion.div>
    </article>
  );
};
export default Modal;
