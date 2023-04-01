import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Modal.module.css";

const Modal = ({image}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.divModal}>
      <motion.div
        // transition={{ layout: { duration: 1, type: "spring" } }}
        // layout

        // transition={{duration: 1, type: "spring"  }}
        onClick={() => setOpen(!isOpen)}
        className={style.divCard}
        style={{
          borderRadius: "1em",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}

      >
        {isOpen ? <motion.h2 animate={{x: "-180px"}}>Proyecto R&M</motion.h2> : <motion.h2 >Proyecto R&M</motion.h2>}
        {isOpen ? <motion.img className={style.image} animate={{x: "-0px"}} src={image} alt="imagen del proyecto" /> : <motion.img className={style.image} src={image} alt="imagen del proyecto" />}
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            className={style.divAddOpen}
            // layout
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              enim, ratione magni, dolores tenetur necessitatibus facere natus
              ipsam qui quibusdam ex nemo molestiae reiciendis culpa eos
              possimus temporibus blanditiis est?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
              veritatis. Optio, tempora nobis adipisci debitis consequatur at
              harum explicabo rem eum quam! Exercitationem, ipsa neque at error
              voluptatum tempore atque?
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
