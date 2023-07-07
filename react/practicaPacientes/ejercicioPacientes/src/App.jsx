{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Listado from './components/Listado';


function App() {

  //Aqui vamos a ir creando las funciones (hooks que necesitamos en general)

  //creamos el hook para el listado de pacientes
  const [pacientes, setPacientes] = useState([]); //por defecto es un array vacío y se irá llenando

  //vamos a crear el hook para cuando se edite un paciente llene el formulario y lo pasamos a listado.
  const [paciente, setPaciente] = useState({});

  //vamos a crear el hook para eliminar a un paciente y pasamos la funcion a listado que donde se usará
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };



  return (
    <>
      <div className="container">
        <div>
        <Header />
        </div>
        <div className="d-md-flex justify-content-between p-4">
         
            <Formulario
            pacientes={pacientes} //esto es un prop que se le pasa al formulario y hay que extraerlo en el archivo formulario
            setPacientes={setPacientes} //esto es un prop que se le pasa al formulario y hay que extraerlo en el archivo formulario
            paciente={paciente}
            setPaciente={setPaciente}
            />
            <Listado
            pacientes={pacientes} //esto es un prop que se le pasa al lsitado y hay que extraerlo en el archivo formulario
            setPaciente={setPaciente} //lo quextraemos en el archivo listado
            eliminarPaciente={eliminarPaciente} //lo extraemos en el archivo listado
            
            
            />
      
        </div>
      </div>
    </>
  );
}

export default App;
