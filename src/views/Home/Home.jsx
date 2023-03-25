import React from "react";
import style from "./Home.module.css";
import foto from "../../assets/foto.jpg";
import Social from "../../components/Social/Social";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import {motion} from "framer-motion";
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
import { type } from "@testing-library/user-event/dist/type";

// animate={{ x: "0px", opacity: 1}}


const Home = () => {
  return (
    <div className={style.divHome}>
      <p>home</p>
      <motion.h1 initial={{opacity: 0, x: "-60px"}}  transition={{ duration: 2 }} whileInView={{ x: "0px", opacity: 1}} viewport={{ margin:"30px" }}>
        Juan Facundo Tam
      </motion.h1>
      <motion.h2 initial={{opacity: 0, x: "60px"}} animate={{ x: "0px", opacity: 1 }} transition={{ duration: 2 }}>
        FullStack Developer
      </motion.h2>
      <img src={foto} className={style.image} alt="Foto Personal" />
      <BoxHeader />
      <Social />
      <div initial={{opacity: 0, y: "-60px"}}  transition={{ duration: 1, delayChildren:2, type:"tween"}} whileInView={{ y: "0px", opacity: 1}}>
        <SiJavascript />
        <SiPostgresql />
        <SiExpress />
        <SiReact />
        <SiRedux />
        <SiCss3 />
        <SiHtml5 />
        <SiNodedotjs />
        <SiNpm />
        <SiSass />
        <SiLess />
        <SiCplusplus />
        <SiCsharp />
        <SiDotnet />
        <SiLinux />
      </div>
    </div>
  );
};

export default Home;
