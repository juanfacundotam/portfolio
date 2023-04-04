import React from "react";
import { motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import { TfiBriefcase } from "react-icons/tfi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsPhone, BsPersonVcard } from "react-icons/bs";
import cv from "../../utils/JuanFacundoTamCV.pdf"

import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = () => {
  return (
    <motion.div
      className={style.divNav}
      // animate={{y: "20px"}}
      whileInView={{ y: "20px" }}
      transition={{ type: "spring", bounce: 0.6, duration: 1 }}
    >
      <a href="#home" className={style.link}>
        <IoPersonOutline className={style.icons} />
      </a>

      <a href="#skills" className={style.link}>
        <BsPersonVcard className={style.icons} />
      </a>

      <a href="#proyectos" className={style.link}>
        <TfiBriefcase className={style.icons} />
      </a>
      <a href="https://github.com/juanfacundotam/juanfacundotam/raw/main/Juan%20Facundo%20Tam%20CV.pdf" className={style.link} download>
      {/* <BsPhone className={style.icons} /> */}
      <p>CV</p>
      </a>
    </motion.div>
  );
};

export default Nav;
