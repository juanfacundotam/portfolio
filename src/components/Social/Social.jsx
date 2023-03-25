import React from "react";
import { FaGithub, FaLinkedinIn, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Social = () => {
  return (
    <motion.div initial={{opacity: 0, y: "60px"}}  transition={{delayChildren: 5}} whileInView={{ y: "0px", opacity: 1}} >
      <a href="#footer" className="icon">
      <FaGithub />
      </a>
      <a href="www.google.com" className="icon">
        <FaGithub />
      </a>
      <a href="#" className="icon">
        <FiGithub />
      </a>
      <a href="#" className="icon">
        <TiSocialLinkedinCircular />
      </a>
      <a href="#" className="icon">
        <FaLinkedinIn />
      </a>
      <a href="#" className="icon">
        <FaLinkedin />
      </a>
    </motion.div>
  );
};

export default Social;
