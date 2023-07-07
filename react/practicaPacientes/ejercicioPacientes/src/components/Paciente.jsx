import PropTypes from "prop-types";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
        eliminarPaciente(paciente.id);

    }
};

    return (
    <div className="p-3 mb-5 bg-light text-dark ">
      <p>
        Nombre: <span>{paciente.mascota}</span>
      </p>
      <p>
        Propietario: <span>{paciente.propietario}</span>
      </p>
      <p>
        Email: <span>{paciente.email}</span>
      </p>
      <p>
        Fecha de alta: <span>{paciente.alta}</span>
      </p>
      <p>
        Dolencia: <span>{paciente.dolencia}</span>
      </p>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-primary p-1 m-1"
        onClick={() => setPaciente(paciente)}
        >Editar</button>
       
       
        <button 
        type="button" 
        className="btn btn-danger p-1 m-1"
        onClick={handleEliminar}                           //al pulsar el boton llamamos a la funcion eliminarPaciente y le pasamos el id del paciente
        >Eliminar</button>
      </div>
    </div>
  )
}

//esto es para validar los props
Paciente.propTypes = {
    // Validaciones de props
    paciente: PropTypes.object.isRequired,
    setPaciente: PropTypes.func.isRequired,
    eliminarPaciente: PropTypes.func.isRequired,
  };
  
  export default Paciente;