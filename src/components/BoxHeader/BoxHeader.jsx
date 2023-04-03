import React from "react";
import style from "../BoxHeader/BoxHeader.module.css";
import { motion } from "framer-motion";
const BoxHeader = () => {
  return (
    // initial={{opacity: 0, y: "60px"}}  transition={{duration:1}} whileInView={{ y: "0px", opacity: 1}}
    <motion.div
      className={style.divBox}
      initial={{ opacity: 0.8, scale: 0.9 }}
      transition={{ duration: 1, delay: 0.1 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <h3>Sobre Mí</h3>
      <p>
        Hola! Mi nombre es Juan Facundo Tam. Soy desarrollador FullStack. Desde
        hace unos años decidí dar un giro vocacional, desde la psicología hacia
        la informática, para así dedicarme a lo que mas me apasiona, la
        programación.
      </p>
      <p>
        Desde aquel entonces me encuentro en formación constante, investigando,
        aprendiendo y generando experiencia.
      </p>
      <p>
        Entre mis cualidades personales, me considero responsable, perseverante
        y creativo. Me destaco en resolver problemas a través de la búsqueda
        activa de soluciones y alternativas. Cuento con una gran apertura, interés 
        y predisposición para dinámicas de trabajo grupal, considerandolas 
        indispensable para el desarrollo tanto profesional como personal.
      </p>
    </motion.div>
  );
};

export default BoxHeader;
