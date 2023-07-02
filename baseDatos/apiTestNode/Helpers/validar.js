//HELPER PARA VALIDAR LOS DATOS DE UN ARTICULO

const validator = require("validator"); //esto es para validar los datos que nos llegan por post usando la libreria validator


const validarArticulo = (res, parametros) => {
  let validar_titulo = !validator.isEmpty(parametros.titulo);
  let validar_contenido = !validator.isEmpty(parametros.contenido);

  if (!validar_titulo || !validar_contenido) {
    throw new Error("No se ha validado la información");
  }
};

module.exports = { validarArticulo };
