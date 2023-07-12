import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  //este useState es para el mensaje de error, lo creo aquí porque solo se va a usar en este componente
  const [mensaje, setMensaje] = useState("");

  //vamos a validar el formulario por si escriben algo que no sea un numero

  const handlePresupuesto = (e) => {
    e.preventDefault(); //esto es para que no se recargue la pagina

    //validar
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
      return; //con esto se sale de la funcion y no hace el else
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añadir presupuesto"
            value={presupuesto}
            //esto es para que cada vez que se escriba algo en el input se guarde en el state la e es de evento
            onChange={(e) => setPresupuesto(Number(e.target.value, 10))} //con esto convertimos el string en numero
          />

          <input type="submit" value="Añadir" />
        </div>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

//esto hay que importarlo en app.js o donde queramos usarlo
