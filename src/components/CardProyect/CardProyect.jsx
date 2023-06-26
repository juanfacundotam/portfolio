import React, { useState } from "react";
import style from "./CardProyect.module.css";
import BasicModal from "../Modal/BasicModal";
import {motion} from "framer-motion"
const proyectsImage = require.context("../../assets/proyectsImage");

const CardProyect = ({
  id,
  tittle,
  description,
  image,
  imagealt,
  link,
  tecnology,
}) => {



  return (
    <div>
      <BasicModal
        id={id}
        tittle={tittle}
        image={image}
        link={link}
        description={description}
        tecnology={tecnology}
      />
    </div>
  );
};

export default CardProyect;
