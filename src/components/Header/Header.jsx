import React from "react";
import style from "./Header.module.css";
import foto from "../../assets/fotoCV.png";
import Social from "../../components/Social/Social";
import { motion } from "framer-motion";


export const Header = () => {
  return (
    <div className={style.divHome} id="home">
      <motion.h1
        initial={{ opacity: 0.8, x: "-20px" }}
        whileInView={{ x: "0px", opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Juan Facundo Tam
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.8, x: "20px" }}
        whileInView={{ x: "0px", opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        FullStack Developer
      </motion.h2>
      <motion.img
        src={foto}
        className={style.image}
        alt="Foto Personal"
        initial={{ opacity: 0.8, scale: 0.9 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      />
      <Social />
    </div>
  );
};
