const validator = require("validator"); //esto es para validar los datos que nos llegan por post usando la libreria validator
const Articulo = require("../Modelos/Articulos"); //esto es para llamar al modelo de articulos

const prueba = (req, res) => {
  //esto es una prueba para ver si funciona la ruta
  return res.status(200).json({
    mensaje: "Hola mundo, probando la ruta", //aqui no lleva , porque es el ultimo elemento del json
  });
};

//esto siguiente es otro metodo para hacer lo mismo que lo de arriba, otra prueba
const cursos = (req, res) => {
  //esto es una ruta de prueba. Reque es lo que recibe y res es lo que responde))

  console.log("Hola mundo, probando la ruta 2"); //esto lo va a devolver por consola, pero necesitamos que lo devuelva por el navegador

  return res.status(200).json([
    {
      //esto lo va a devolver por el navegador
      Nombre: "Javier",
      Apellido: "Garcia",
      Autor: "Javier Garcia",
    },
  ]);
};

//METODO PARA GUARDAR ARTICULOS EN LA BD
const crear = (req, res) => {
  //recoger parametros por post de un usuario ya se por formulario etc...

  let parametros = req.body; //esto es para recoger los parametros que nos llegan por post

  //luego validamos esos datos (con express validator) ponemos una promesa por si acaso falla.
  try {
    let validar_titulo = !validator.isEmpty(parametros.titulo); //esto es para validar que el titulo no este vacio

    let validar_contenido = !validator.isEmpty(parametros.contenido); //esto es para validar que el contenido no este vacio

    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado la información"); //esto es para que salte el error
    }
  } catch (error) {
    return res.status(400).json({
      //esto lo va a devolver por el navegador, el 400 es que ha habido un error
      mensaje: "Faltan datos por enviar",
      status: "error",
    });
  }

  // Crear el objeto a guardar
  const articulo = new Articulo(parametros);

  // Guardar el artículo en la BD utilizando save (promesa)
  articulo
    .save()
    .then((articuloGuardado) => {
      //devolver una respuesta positiva
      return res.status(200).json({
        mensaje: "Artículo guardado correctamente",
        status: "success",
        articuloGuardado,
      });
    })
    //devolver una respuesta negativa
    .catch((error) => {
      return res.status(500).json({
        mensaje: "Error al guardar el artículo",
        status: "error",
        error: error.message,
      });
    });
};

//METODO PARA LISTAR ARTICULOS DE LA BD USANDO PROMESA

const listar = (req, res) => {
  Articulo.find({})
  //.sort //con sort ordenamos los articulos por fecha de creacion
    .then((articulos) => { //esto es una promesa que nos devuelve los articulos
      if (articulos.length === 0) {
        return res.status(404).json({
          mensaje: "No se han encontrado artículos",
          status: "error",
        });
      }

      return res.status(200).json({
        mensaje: "Lista de artículos",
        status: "success",
        articulos,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        mensaje: "Error al buscar los artículos",
        status: "error",
      });
    });
};

// Exportar los métodos
module.exports = {
  prueba,
  cursos,
  crear,
  listar,
};


