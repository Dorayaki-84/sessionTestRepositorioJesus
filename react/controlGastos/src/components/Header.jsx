import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidPresupuesto ? (   //si esto es valido se va a ir a la nueva paginaweb, al nuevo componente
        <ControlPresupuesto
            presupuesto={presupuesto} //cuando carga esa pagina carga el presupuesto que hemos puesto
        
        />
      ) : (
        
      

      <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      )}
    </header>
  );
};

export default Header;

//esto hay que importarlo en app.js
