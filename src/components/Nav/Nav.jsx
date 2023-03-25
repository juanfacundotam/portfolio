import React from "react";
import {motion} from "framer-motion"
import { IoPersonOutline } from "react-icons/io5";
import { TfiBriefcase } from "react-icons/tfi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsPhone, BsPersonVcard} from "react-icons/bs";


import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"
const Nav = () => {
    return(
        <motion.div className={style.divNav}
            animate={{y: "20px"}}
            transition={{type:"spring", bounce: 0.6, duration:1}}
        >
            <NavLink className={style.link}>
                <IoPersonOutline className={style.icons} />
            </NavLink>
            <NavLink className={style.link}>
                <BsPersonVcard className={style.icons} />
            </NavLink>
            <NavLink className={style.link}>
                <TfiBriefcase className={style.icons}/>
            </NavLink>
            <NavLink className={style.link}>
                <BsPhone className={style.icons}/>
            </NavLink>
        </motion.div>
    )
}

export default Nav;

