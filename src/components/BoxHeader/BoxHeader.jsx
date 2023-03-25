import React from "react";
import style from "../BoxHeader/BoxHeader.module.css";

const BoxHeader = () => {
  return (
    <div className={style.divBox}>
      <h3>Sobre Mí</h3>
      <p>
        Hola! Mi nombre es Juan Facundo Tam. Soy desarrollador FullStack. Desde
        hace unos años decidí dar un giro vocacional, desde la psicología hacia
        la informática, para así dedicarme a lo que mas me apasiona, la
        programación.
      </p>
      <p>
        Desde aquel entonces me encuentro en formación constante, investigando,
        intentando seguir aprendiendo y generando toda la experiencia posible,
        siendo esta modalidad parte de mi agenda cotidiana.
      </p>
      <p>
        Entre mis cualidades personales, me considero aplicado, perseverante y
        creativo, destacándome en resolver problemas a través de la búsqueda
        activa de soluciones y alternativas. Cuento con una gran apertura,
        interés y predisposición para dinámicas de trabajo grupal.
      </p>
    </div>
  );
};

export default BoxHeader;
