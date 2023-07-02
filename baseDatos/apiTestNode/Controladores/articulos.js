const e = require("express");
const { validarArticulo } = require("../Helpers/validar"); //esto es para llamar a la validacion de articulos que ahora está en el helper
const Articulo = require("../Modelos/Articulos"); //esto es para llamar al modelo de articulos
const path = require("path"); //esto es para poder acceder a las rutas de los archivos
const fs = require("fs"); //esto es para poder borrar archivos que subimos y no necesitamos

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
    validarArticulo(res, parametros);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al crear el artículo",
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
    .then((articulos) => {
      //esto es una promesa que nos devuelve los articulos
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

//METODO PARA SACAR UN SOLO ARTICULO

const uno = (req, res) => {
  // Recoger el id de la url
  let id = req.params.id;

  // Buscar el artículo
  Articulo.findById(id)
    .then((articulo) => {
      // Devolver el error si no hay artículo
      if (!articulo) {
        return res.status(404).json({
          mensaje: "No se ha encontrado el artículo",
          status: "error",
        });
      }

      // Devolver el artículo encontrado
      return res.status(200).json({
        mensaje: "Artículo encontrado",
        status: "success",
        articulo,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        mensaje: "Error al buscar el artículo",
        status: "error",
      });
    });
};

//METODO PARA BORRAR UN ARTICULO

const borrar = (req, res) => {
  let articuloId = req.params.id;

  Articulo.findOneAndDelete({ _id: articuloId })
    .then((articulo) => {
      if (!articulo) {
        return res.status(404).json({
          mensaje: "No se ha encontrado el artículo",
          status: "error",
        });
      }

      return res.status(200).json({
        mensaje: "Artículo eliminado correctamente",
        status: "success",
        articulo,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        mensaje: "Error al eliminar el artículo",
        status: "error",
      });
    });
};

//METODO PARA EDITAR UN ARTICULO

const editar = (req, res) => {
  let id = req.params.id;
  let parametros = req.body;

  try {
    validarArticulo(res, parametros);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al editar el artículo",
      status: "error",
    });
  }

  Articulo.findOneAndUpdate({ _id: id }, parametros, { new: true })
    .then((articulo) => {
      if (!articulo) {
        return res.status(404).json({
          mensaje: "No se ha encontrado el artículo",
          status: "error",
        });
      }

      return res.status(200).json({
        mensaje: "Artículo actualizado correctamente",
        status: "success",
        articulo,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        mensaje: "Error al actualizar el artículo",
        status: "error",
      });
    });
};

//METODO PARA ENVIAR UNA IMAGEN

const subir = (req, res) => {
  //CONFIGURAR MULTER (con lo de las carpetas par asubir imagenes y eso en la carpeta rutas)

  //RECOGER EL FICHERO DE LA IMAGEN SUBIDA (vamos a hacer que siempre se recoga un archivo, si no se recoge dara error)
  if (!req.file && !req.files) {
    return res.status(400).json({
      mensaje: "Petición invadlida, no se ha subido ningún archivo",
      status: "error",
    });
  }
  //NOMBRE DEL ARCHIVO
  let archivo = req.file.originalname;

  //EXTENSION DEL ARCHIVO

  let archivo_split = archivo.split(".");
  let extension = archivo_split[1]; //con esto sacamos la extension del archivo el 1 es jpg y el 0 es el nombre

  //COMPROBAR LA EXTENSION, SOLO IMAGENES, SI ES VALIDA BORRAR EL FICHERO
  if (
    extension != "png" &&
    extension != "jpg" &&
    extension != "jpeg" &&
    extension != "gif"
  ) {
    //BORRAR EL ARCHIVO SUBIDO Y DAR RESPUESTA DE ERROR
    fs.unlink(req.file.path, (error) => {
      return res.status(400).json({
        mensaje: "La extensión de la imagen no es válida",
        status: "error",
      });
    });
  } else {
    let id = req.params.id; //recogemos el id del articulo

    //buscar y actualizar archivo

    Articulo.findOneAndUpdate(
      { _id: id },
      { imagen: req.file.filename },
      { new: true }
    )
      .then((articulo) => {
        if (!articulo) {
          return res.status(404).json({
            mensaje: "No se ha encontrado el artículo",
            status: "error",
          });
        }

        return res.status(200).json({
          mensaje: "Artículo actualizado correctamente",
          status: "success",
          articulo,
          fichero: req.file,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          mensaje: "Error al actualizar el artículo",
          status: "error",
        });
      });
  }
};

// METODO PARA MOSTRAR UNA IMAGEN (crear su ruta)

const imagen = (req, res) => {
  let fichero = req.params.fichero; // Recogemos el nombre del fichero
  let ruta_fisica = "./imagenes/articulos/" + fichero; // Ruta física del fichero

  fs.stat(ruta_fisica, (error, existe) => {
    if (existe) {
      return res.sendFile(path.resolve(ruta_fisica));
    } else {
      return res.status(404).json({
        mensaje: "La imagen no existe",
        status: "error",
      });
    }
  });
};

// METODO PARA BUSCAR ARTICULOS

const buscar = (req, res) => {
  let busqueda = req.params.busqueda;

  Articulo.find({
    $or: [
      { titulo: { $regex: busqueda, $options: "i" } },
      { contenido: { $regex: busqueda, $options: "i" } },
    ],
  })
    .sort({ fecha: -1 })
    .then((articulosEncontrados) => {
      if (articulosEncontrados.length === 0) {
        return res.status(404).json({
          mensaje: "No se ha encontrado ningún artículo",
          status: "error",
        });
      }

      return res.status(200).json({
        mensaje: "Artículos encontrados",
        status: "success",
        articulosEncontrados,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        mensaje: "Error al buscar los artículos",
        status: "error",
      });
    });
};


// const buscar = (req, res) => {
//   let busqueda = req.params.id;

//   Articulo.find({
//     $or: [
//       { titulo: { $regex: busqueda, $options: "i" } },
//       { contenido: { $regex: busqueda, $options: "i" } },
//     ],
//   })
//     .sort({ fecha: -1 })
//     .exec((error, articulosEncontrados) => {
//       if (error || !articulosEncontrados) {
//         return res.status(404).json({
//           mensaje: "No se ha encontrado ningún artículo",
//           status: "error",
//         });
//       }

//       return res.status(200).json({
//         mensaje: "Artículos encontrados",
//         status: "success",
//         articulosEncontrados,
//       });
//     });
// };

// Exportar los métodos
module.exports = {
  prueba,
  cursos,
  crear,
  listar,
  uno,
  borrar,
  editar,
  subir,
  imagen,
  buscar,
};
