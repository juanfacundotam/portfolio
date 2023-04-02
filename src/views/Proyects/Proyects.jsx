import React from "react";
import style from "./Proyects.module.css";

import data from "../../utils/data.js"

import CardProyect from "../../components/CardProyect/CardProyect";

const Proyects = () => {


  return (
    <div className={style.divProyects}>
      {data.map(({id, tittle, description, image, imageAlt, tecnology }) => {
        return (
          <CardProyect
            key={id}
            id={id}
            tittle={tittle}
            description={description}
            image={image}
            imageAlt={imageAlt}
            tecnology={tecnology}
          />
        )
      })}
      {/* {proyect.map((proy) => {
        <div>
          <h1>{proy.tittle}</h1>
          <p>{proy.description}</p>
          <img src={proy.image} alt={proy.imageAlt} />
          <ul>
            {proy.tecnology.map((tec) => {
              <li>{tec}</li>;
            })}
          </ul>
        </div>;
      })} */}
      {/* <Modal image={foto}/>
            <Modal image={foto}/>
            <Modal image={foto}/>
            <Modal image={foto}/> */}

      {/* <div variant="primary" onClick={() => setModalShow(true)}>
        Proyecto 1
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Proyecto 2
      </Button>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Proyecto 3
      </Button>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Proyecto 4
      </Button> */}


    </div>
  );
};

export default Proyects;

// viewport={{ once: true }} para que no lo haga de manera ilimitada
