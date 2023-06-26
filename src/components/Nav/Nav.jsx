import React from "react";
import { motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import { TfiBriefcase } from "react-icons/tfi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsPhone, BsPersonVcard } from "react-icons/bs";


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
      <a href="https://drive.google.com/file/d/15sRogdIH_nOd4WUyPVQ8x6hd_8C2_PV1/view?usp=sharing" className={style.link} download>
      {/* <BsPhone className={style.icons} /> */}
      <p>CV</p>
      </a>
    </motion.div>
  );
};

export default Nav;
