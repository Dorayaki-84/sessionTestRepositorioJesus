import { useState, useEffect } from "react";
import PropTypes from 'prop-types';  //esto es para validar los props
import Error from "./Error";



const Formulario = ({pacientes, setPacientes}) => { //estamos extrayendo el prop que se le pasa al formulario
  //el useState tiene que ser declarado aquí arriba para que funcione

  //Vamos a crear un hook para generar un id único

    const generarId = () => {
      const random = Math.random().toString(36).substring(2, 9); //esto es para generar un número aleatorio
        const fecha = new Date().getTime().toString(36); //esto es para generar la fecha
        return random + fecha; //esto es para que devuelva el número aleatorio y la fecha y obtener un ID unico
    }


  

  //Ahora creamos todos los useState que necesitamos
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState(""); //hook es el valor inicial pero luego se puede cambiar con el setMascota o se puede dejar vacío
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [dolencia, setDolencia] = useState("");

  //vamos a crear otro hook para la valicación del formulario
  const [error, setError] = useState(false); //por defecto no hay error pero si hay error se cambia a true vamos a colocarlo en la validación del formulario

  //Aqui creamos una variable para validar el formulario y se le aplica al form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if (
      mascota === "" ||
      propietario === "" ||
      email === "" ||
      alta === "" ||
      dolencia === ""
    ) {
      console.log("Hay campos vacíos");
      setError(true);
      return
    } 
    setError(false)
    //vamos a crear el objeto que se va a enviar al hook. Objeto paciente
    
    const objetoPaciente = {
        mascota, 
        propietario, 
        email, 
        alta, 
        dolencia,
        id: generarId()

    };
    setPacientes([...pacientes, objetoPaciente]); //esto es lo que se va a enviar al hook de pacientes pero en un arreglo nuevo al usar ... y te crear un paciente nuevo
  

         //CON ESTO REINICIAMOS EL FORMULARIO AL ENVIAR EL PACIENTE
    
         setMascota("");
         setPropietario("");
         setEmail("");
         setAlta("");
         setDolencia("");

};

   
    


  return (
    <div>
      <h2>Formulario</h2>
      <p>Rellene todos los campos para dar de alta a una mascota.</p>

      <div>
        <form className="mb-5 p-3 bg-light" onSubmit={handleSubmit}>
        <div>
        {error && <Error mensaje="Hay campos vacíos"
        />}
        </div>
          <label htmlFor="mascota" className="form-label">
            Nombre de la mascota:
          </label>
          <input
            type="text"
            className="form-control"
            id="mascota"
            name="mascota"
            //aquí se le asigna el valor del hook
            value={mascota}
            onChange={(e) => setMascota(e.target.value)} // la e es del evento y el target es el input que esta escribiendo el usuario
          />
          <label htmlFor="propietario" className="form-label">
            Propietario:
          </label>
          <input
            type="text"
            className="form-control"
            id="propietario"
            name="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="alta" className="form-label">
            Fecha de alta:
          </label>
          <input
            type="date"
            className="form-control"
            id="alta"
            name="alta"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
          <label htmlFor="dolencia" className="form-label mt-3">
            Dolencia:
          </label>
          <textarea
            className="form-control"
            name="dolencia"
            id="dolencia"
            cols="60"
            rows="10"
            value={dolencia}
            onChange={(e) => setDolencia(e.target.value)}
          ></textarea>
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-success mt-3"
              value="Añadir paciente"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = { //esto es para validar los props
    pacientes: PropTypes.array.isRequired,
    setPacientes: PropTypes.func.isRequired,
  };

export default Formulario;
