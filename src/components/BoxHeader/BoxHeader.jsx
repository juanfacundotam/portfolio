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
        ¡Hola, soy Juan Facundo Tam! Soy un apasionado desarrollador FullStack
        que decidió dar un giro vocacional desde la psicología hacia la
        informática para dedicarme a lo que realmente me apasiona: la
        programación.
      </p>
      <p>
        Desde entonces, me he mantenido en constante formación, investigando,
        aprendiendo y acumulando experiencia.
      </p>
      <p>
        Me considero una persona responsable, perseverante y creativa, y destaco
        en la resolución de problemas mediante la búsqueda activa de soluciones
        y alternativas. Tengo una gran apertura, interés y predisposición para
        trabajar en equipo, ya que considero que el trabajo colaborativo es
        esencial para el crecimiento tanto profesional como personal. Sigo
        comprometido con mi crecimiento continuo y estoy emocionado por explorar
        las oportunidades que la programación me brinda en el futuro.
      </p>
    </motion.div>
  );
};

export default BoxHeader;
