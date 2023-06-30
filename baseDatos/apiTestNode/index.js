const {conexion} = require('./baseDatos/conexion'); //con esto estamos llamando a la conexion a la BD
const express = require('express');  //con esto estamos llamando a express

console.log('App de node iniciada');

//conectar a la base de datos

conexion();

//Crear servidor de node con xpress que es el framwork de node

const app = express(); //llamamos a express mediante la funcion express de aqui podemos invocar metodos de express
const puerto = 4000; //esto es el puerto donde va a escuchar el servidor
const cors = require('cors'); //con esto estamos llamando a cors

//configurar cors (cors es un mecanismo que permite que se puedan hacer peticiones desde un dominio a otro dominio)
app.use(cors());

//convertir el body a un archivo json
app.use(express.json()); //esto hace que cuando necesitemos recibir datos de un formulario, lo que hace es que lo convierte en un objeto json

//crear rutas


//escuchar peticiones
app.listen(puerto, () => {  //esto es para que el servidor escuche peticiones
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});