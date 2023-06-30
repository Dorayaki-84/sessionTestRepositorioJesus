const mongoose = require('mongoose');  //con esto estamos llamando a mongoose

const conexion = async () => {   //esto es una promesa que se ejecuta cuando se conecta a la BD
    try {
        
        await mongoose.connect("mongodb://127.0.0.1/mi_Blog")  //esto es la conexion a la BD, el await es por si tarda un poco, espera.

        useNewUrlParser: true
        useUnifiedTopology: true
        useCreateIndex: true

        console.log('BD conectada');    //esto es para saber que nos hemos conectado a la BD.

    } catch (error) {   //esto es por si no conseguimos conectarnos a la BD
        
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}
    
module.exports = { conexion };  //esto es para exportar la conexion a la BD