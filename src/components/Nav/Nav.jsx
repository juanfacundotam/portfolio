import React from "react";

import { IoPersonOutline } from "react-icons/io5";
import { TfiBriefcase } from "react-icons/tfi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsPhone, BsPersonVcard} from "react-icons/bs";


import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"
const Nav = () => {
    return(
        <div className={style.divNav}>
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
        </div>
    )
}

export default Nav;

