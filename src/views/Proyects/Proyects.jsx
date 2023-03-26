import React from "react";
import { useRef } from "react";
import {delay, motion} from "framer-motion"

const Proyects = () => {
    const scrollRef = useRef(null)
    return (
        <motion.div  >
            <motion.h1 initial={{opacity: 0.5, x: "-60px"}}  transition={{ duration: 1, delay:0}} whileInView={{ x: "0px", opacity: 1}}>Proyects</motion.h1>
            <motion.h1 initial={{opacity: 0.5, x: "-60px"}}  transition={{ duration: 1, delay:0.2}} whileInView={{ x: "0px", opacity: 1}}>Proyects</motion.h1>
            <motion.h1 initial={{opacity: 0.5, x: "-60px"}}  transition={{ duration: 1, delay:0.4}} whileInView={{ x: "0px", opacity: 1}}>Proyects</motion.h1>
            <motion.h1 initial={{opacity: 0.5, x: "-60px"}}  transition={{ duration: 1, delay:0.6}} whileInView={{ x: "0px", opacity: 1}}>Proyects</motion.h1>
        </motion.div>
    )
}

export default Proyects;


// viewport={{ once: true }} para que no lo haga de manera ilimitada