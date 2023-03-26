import React from "react";
import style from "./Social.module.css"
import { FaGithub, FaLinkedinIn, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Social = () => {
  return (
    <motion.div className={style.divIcons} initial={{opacity: 0, y: "60px"}}  transition={{delayChildren: 5}} whileInView={{ y: "0px", opacity: 1}} >
      <a href="#footer" className={style.BorderIcons}>
      <FaGithub className={style.icons} />
      </a>
      <a href="www.google.com" className={style.BorderIcons}>
        <FaGithub className={style.icons} />
      </a>
      <a href="#" className={style.BorderIcons}>
        <FiGithub className={style.icons} />
      </a>
      <a href="#" className={style.BorderIcons}>
        <TiSocialLinkedinCircular className={style.icons} />
      </a>
      <a href="#" className={style.BorderIcons}>
        <FaLinkedinIn className={style.icons} />
      </a>
      <a href="#" className={style.BorderIcons}>
        <FaLinkedin className={style.icons} />
      </a>
    </motion.div>
  );
};

export default Social;