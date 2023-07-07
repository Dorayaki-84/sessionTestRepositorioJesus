const Error = ({mensaje}) => {   //estamos pasando el prop mensaje que se recibe en el archivo Formulario.jsx
  return (
    <div>
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
