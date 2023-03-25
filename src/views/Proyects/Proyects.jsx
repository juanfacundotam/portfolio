import React from "react";
import { useRef } from "react";
import {motion} from "framer-motion"

const Proyects = () => {
    const scrollRef = useRef(null)
    return (
        <motion.div  initial={{opacity: 0, x: "-60px"}}  transition={{ duration: 2, type:"spring", bounce: 2}} whileInView={{ x: "0px", opacity: 1}}>
            <h1>Proyects</h1>
            <h1>Proyects</h1>
            <h1>Proyects</h1>
            <h1>Proyects</h1>
        </motion.div>
    )
}

export default Proyects;


// viewport={{ once: true }} para que no lo haga de manera ilimitada