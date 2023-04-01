import React from "react";
import style from "./Proyects.module.css"
import { useRef } from "react";
import {delay, motion} from "framer-motion"
import Modal from "../../components/Modal/Modal";
import foto from "../../assets/foto.jpg"

const Proyects = () => {
    return (
        <div  className={style.divProyects}>
            <Modal image={foto}/>
            <Modal image={foto}/>
            <Modal image={foto}/>
            <Modal image={foto}/>
        </div>
    )
}

export default Proyects;


// viewport={{ once: true }} para que no lo haga de manera ilimitada