import Paciente from "./Paciente";
import PropTypes from 'prop-types';
import {useEffect } from "react";


const Listado = ({ pacientes, setPaciente, eliminarPaciente }) => { //extraemos los props que se pasan desde app.js y los usamos en el componente
 
    useEffect(() => {
        if (pacientes.length > 0) {
            console.log("Nuevo paciente agregado")
        }
        
     }, [pacientes]);
 
    return (
        <div className="vh-100 overflow-auto">
          {pacientes && pacientes.length === 0 ? (
            <>
            <h2 className="text-right display-6">No hay pacientes</h2>
            <p className=".lead">Comienza agregando a tu primer paciente.</p>

            </>
            
          ) : (
            <>
              <h2 className="text-right display-6">Listado de pacientes</h2>
              <p className=".lead">Administra tus pacientes en esta sección.</p>

              
     
    
              {pacientes.map(paciente => (
                <Paciente 
                  key={paciente.id}
                  paciente={paciente} 
                  setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
              ))}
            </>
          )}
        </div>
      );
    };
    
    Listado.propTypes = {
      pacientes: PropTypes.array.isRequired,
    };
    

Listado.propTypes = { //esto es para validar los props
    pacientes: PropTypes.array.isRequired,
    setPaciente: PropTypes.func.isRequired,
    eliminarPaciente: PropTypes.func.isRequired
   
  };


export default Listado;
