
import PropTypes from 'prop-types'; 

const Paciente = ({paciente}) => {
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
      </div>
    );
  };

  Paciente.propTypes = { //esto es para validar los props
    paciente: PropTypes.array.isRequired,
    
  };

  
  export default Paciente;