import React from "react";
import style from "./Proyects.module.css";

import data from "../../utils/data.js";

import CardProyect from "../../components/CardProyect/CardProyect";

const Proyects = () => {
  return (
    <div className={style.contenedor} id="proyectos">
      <h1>Proyectos</h1>
      <div className={style.divProyects}>
        {data.map(({ id, tittle, description, image, imageAlt, tecnology, link}) => {
          return (
            <CardProyect
              key={id}
              id={id}
              link={link}
              tittle={tittle}
              description={description}
              image={image}
              imageAlt={imageAlt}
              tecnology={tecnology}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Proyects;

// viewport={{ once: true }} para que no lo haga de manera ilimitada
