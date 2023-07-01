const { Schema, model } = require("mongoose"); //schema y model son metodos que llamamos para crear los moldes. Schema es para crear el molde y model es para crear el modelo

const ArticuloSchema = Schema({
  //esto es para crear el molde
  titulo: {
    type: String, //tipo de dato
    required: true, //esto es para que sea obligatorio
  },
  contenido: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
    default: "no-image.png", //esto es para que si no se pone imagen, ponga una por defecto que tenemos que tener en la carpeta publica
  },
  fecha: {
    type: Date, //esto es para que sea una fecha
    default: Date.now(), //esto es para que la fecha sea la actual
  },
});

module.exports = model("Articulo", ArticuloSchema, "articulos"); //esto es para exportar el modelo. 
                                                                //El primer parametro es el nombre del modelo y el segundo es el molde que hemos creado, el tercero 
                                                                //es el nombre de la coleccion de la BD


                                                                