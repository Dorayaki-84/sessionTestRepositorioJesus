import { useState } from "react";
import Header from "./components/header";
import { generarID } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  //estas variables hay que pasarlas donde se van a usar, en este caso en Header.jsx y luego en el componente que se este usando, lo pasamos como props.
  const [presupuesto, setPresupuesto] = useState(0); //presupuesto inicial que cambiara con setPresupuesto y empieza con valor 0
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); //esto es para validar el presupuesto, empieza como false porque el presupuesto esta a 0

  const [modal, setModal] = useState(false); //esto es para el modal, empieza como false porque no se ve
  const [animarModal, setAnimarModal] = useState(false); //esto es para animar el modal, empieza como false porque no se ve

  const [gastos, setGastos] = useState([]); //esto es para guardar los gastos, empieza como objeto vacio

  const handleNuevoGasto = () => {
    setModal(true); //esto es para que cuando se haga click en el icono se vea el modal que ahora esta en true

    //vamos a animar el modal con un setTimeout y el css

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  //creamos la funcion para guardar gastos, se puede crear aquí y se pasa al modal como props

  const guardarGasto = (gasto) => {
    gasto.id = generarID(); //con esto le damos un id a cada gasto
    gasto.fecha = Date.now(); //con esto le damos la fecha actual a cada gasto
    setGastos([...gastos, gasto]); //con esto guardamos el gasto en el array de gastos con una copia nueva

    //ocultar el modal

    setAnimarModal(false);

    //con esto hacemos que al cerrar el modal no sea tan brusco, que se vaya poco a poco
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? "fijar" : ""}> {/*esto es para que cuando se abra el modal el fondo se quede fijo*/}
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto ? (
       <>
       <main>
          <ListadoGastos
            gastos={gastos} //esto es para que conozca los gastos que hemos creado
          />
       </main>
       <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
        </>
      ) : null}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
