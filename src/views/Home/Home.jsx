import React from "react";
import style from "./Home.module.css";
import foto from "../../assets/foto.jpg";
import Social from "../../components/Social/Social";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiPostgresql,
  SiExpress,
  SiReact,
  SiRedux,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiNpm,
  SiSass,
  SiLess,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiLinux,
} from "react-icons/si";

import Skills from "../../components/Skills/Skills";

// animate={{ x: "0px", opacity: 1}}

const Home = () => {
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
      <BoxHeader />
      <Skills />

    </div>
  );
};

export default Home;
