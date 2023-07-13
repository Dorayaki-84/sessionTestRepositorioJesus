import React from "react";
import { formatearFecha } from "../helpers";

//importamos las imagenes

import iconoComida from "../img/icono_comida.svg";
import iconoAhorro from "../img/icono_ahorro.svg";
import iconoCasa from "../img/icono_casa.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoSuscripciones from "../img/icono_suscripciones.svg";

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto; //eso es distructuring, es como poner gasto.categoria, gasto.nombre, etc

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/* imagen */}
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {""} <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">{cantidad}€</p>
    </div>
  );
};

export default Gasto;
