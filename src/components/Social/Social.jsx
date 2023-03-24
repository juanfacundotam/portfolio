import React from "react";
import { FaGithub, FaLinkedinIn, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div>
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
    </div>
  );
};

export default Social;
