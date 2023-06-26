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
import { Header } from "../../components/Header/Header";

// animate={{ x: "0px", opacity: 1}}

const Home = () => {
  return (
    <div className={style.divHome} id="home">
<Header/>

      <BoxHeader />

      <Skills />

    </div>
  );
};

export default Home;
