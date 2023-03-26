import React from "react";
import { motion } from "framer-motion";
import style from "./Skills.module.css";
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

const Skills = () => {
  return (
    <div className={style.divContainer}>
      <h1>My Skills</h1>
      <motion.div
        className={style.divIcons}
        initial={{ opacity: 0, y: "-60px" }}
        transition={{ duration: 1, delayChildren: 2, type: "tween" }}
        whileInView={{ y: "0px", opacity: 1 }}
      >
        <SiJavascript className={style.icons} />
        <SiPostgresql className={style.icons} />
        <SiExpress className={style.icons} />
        <SiReact className={style.icons} />
        <SiRedux className={style.icons} />
        <SiCss3 className={style.icons} />
        <SiHtml5 className={style.icons} />
        <SiNodedotjs className={style.icons} />
        <SiNpm className={style.icons} />
        <SiSass className={style.icons} />
        <SiLess className={style.icons} />
        <SiCplusplus className={style.icons} />
        <SiCsharp className={style.icons} />
        <SiDotnet className={style.icons} />
        <SiLinux className={style.icons} />
      </motion.div>
    </div>
  );
};

export default Skills;
