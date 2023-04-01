import React from "react";
import style from "./Proyects.module.css";
import ModalProyects from "../../components/ModalProyects/ModalProyects";
import data from "../../utils/data.js"
import Button from "react-bootstrap/Button";
import foto from "../../assets/foto.jpg";
import CardProyect from "../../components/CardProyect/CardProyect";

const Proyects = () => {
  const [modalShow, setModalShow] = React.useState(false);

  // const data = [
  //   {
  //     tittle: "Proyecto 1",
  //     description: "Hecho con lo que sea que esta hecho",
  //     image: "foto",
  //     imageAlt: "foto proyecto 1",
  //     tecnology: ["iconos", "iconos", "iconos"],
  //   },
  //   {
  //     tittle: "Proyecto 2",
  //     description: "Este esta hecho de manera distinta",
  //     image: "foto2",
  //     imageAlt: "foto proyecto 2",
  //     tecnology: ["iconitos", "iconitos", "iconitos"],
  //   },
  // ];

  const handleOpen = () => {
    setModalShow(true);
  };

  return (
    <div className={style.divProyects}>
      <h2>Aca van los proyectos</h2>
 
      {data.map(({id, tittle, description, image, imageAlt, tecnology }) => {
        return (
          <CardProyect
            key={id}
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

      <ModalProyects
        show={modalShow}
        handleOpen={handleOpen}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Proyects;

// viewport={{ once: true }} para que no lo haga de manera ilimitada
