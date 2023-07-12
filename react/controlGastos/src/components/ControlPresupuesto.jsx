import React from "react";

const ControlPresupuesto = ({ presupuesto }) => {
  //vamos a crear una funcion que convierte un numero en monedas

  const convertirMoneda = (numero) => {
    return numero.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>Grafica aquí</p>

      <div className="contenido-presupuesto"></div>
      <p>
        <span>Presupuesto: </span>
        {convertirMoneda(presupuesto)}
      </p>
      <p>
        <span>Disponible: </span>
        {convertirMoneda(0)}
      </p>
      <p>
        <span>Gastado: </span>
        {convertirMoneda(0)}
      </p>
    </div>
  );
};

export default ControlPresupuesto;

//esto hay que importarlo en el componente que se va a usar, en este caso en NuevoPresupuesto.jsx
