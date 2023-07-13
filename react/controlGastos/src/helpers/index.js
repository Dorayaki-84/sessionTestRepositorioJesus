//funcion para sacar un numero random y hay que exportarla para poder usarla en otro archivo

export const generarID = () => {
  const random = Math.random().toString(36);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

//funcion para formatear la fecha, las funciones se exportan a otros componentes para poder usarlas y ahí se importan
export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = { year: "numeric", month: "long", day: "2-digit" };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// import React from "react";

// const ListadoGastos = () => {
//   return <div></div>;
// };

// export default ListadoGastos;
