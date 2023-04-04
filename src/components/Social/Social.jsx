import React from "react";
import style from "./Social.module.css"
import { FaGithub, FaLinkedinIn, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"


const Social = () => {
  return (
    <motion.div className={style.divIcons} initial={{opacity: 0.8, scale:0.9}}  transition={{duration:1}} whileInView={{ scale:1  , opacity: 1}} >
      <a href="https://github.com/juanfacundotam" className={style.BorderIcons}>
        <FiGithub className={style.icons} />
      </a>
      <a href="https://www.linkedin.com/in/juan-facundo-tam-12b943223/" className={style.BorderIcons}>
        <FaLinkedinIn className={style.icons} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=541137736885" className={style.BorderIcons}>
        <FaWhatsapp className={style.icons} />
      </a>
    </motion.div>
  );
};

export default Social;

{/* <a href="#" className={style.BorderIcons}>
<FaLinkedin className={style.icons} />
</a> */}
{/* <a href="#" className={style.BorderIcons}>
<TiSocialLinkedinCircular className={style.icons} />
</a> */}
{/* <a href="#footer" className={style.BorderIcons}>
<FaGithub className={style.icons} />
</a>
<a href="www.google.com" className={style.BorderIcons}>
  <FaGithub className={style.icons} />
</a> */}