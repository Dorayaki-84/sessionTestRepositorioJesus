import { useState } from "react";
import Mensaje from "./Mensaje";
import cerrarModalBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    //vamos a empezar a registrar los cambios en los inputs del formulario con useState

    const [mensaje, setMensaje] = useState ('');
    const [nombre, setNombre] = useState('');  //esto tenemos que ponerlo en el input del formulario, en el value IMPORTANTISIMO
    const [cantidad, setCantidad] = useState(''); 
    const [categoria, setCategoria] = useState('');


  const ocultarModal = () => {
    
    setAnimarModal(false);

    //con esto hacemos que al cerrar el modal no sea tan brusco, que se vaya poco a poco
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  //vamos a validar el formulario

  const handleSubmit = (e) => {
    e.preventDefault(); //esto es para que no se recargue la pagina al enviar el formulario

        if ([nombre, cantidad, categoria].includes('')) {   //.includes es un metodo de los arrays que nos permite saber si hay algun campo vacio
           setMensaje('Todos los campos son obligatorios');
            return;
        }

        //si pasa la validacion creamos el objeto gasto
        guardarGasto({nombre, cantidad, categoria});
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarModalBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto:</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} {/*esto es para que se muestre el mensaje de error si no se rellenan los campos*/}

            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                id="nombre"
                type="text" 
                placeholder="Ej. Transporte" 
                value={nombre} //esto es para que se registren los cambios en el input que hemos creado arriba en el usetState
                onChange={(e) => setNombre(e.target.value)} //y con esto irá guardando en nombre lo que el usuario escriba a traves de setNombre
                
                />
            </div>

            <div className="campo">
                <label>Cantidad</label>
                <input 
                id="cantidad"
                type="number" 
                placeholder="Ej. 200" 
                value={cantidad}
                onChange={(e) => setCantidad (Number(e.target.value))}
                
                />
            </div>

            <div className="campo">
                <label>Categoría</label>
                <select  
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="subscripciones">Subscripciones</option>


                </select>

                <input type="submit"
                value="Agregar Gasto"
                />
                
            </div>



      </form>
    </div>
  );
};

export default Modal;
