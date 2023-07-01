const {conexion} = require('./baseDatos/conexion'); //con esto estamos llamando a la conexion a la BD
const express = require('express');  //con esto estamos llamando a express

console.log('App de node iniciada');

//conectar a la base de datos

conexion();

//Crear servidor de node con xpress que es el framwork de node

const app = express(); //llamamos a express mediante la funcion express de aqui podemos invocar metodos de express
const puerto = 2000; //esto es el puerto donde va a escuchar el servidor
const cors = require('cors'); //con esto estamos llamando a cors

//configurar cors (cors es un mecanismo que permite que se puedan hacer peticiones desde un dominio a otro dominio)
app.use(cors());

//convertir el body a un archivo json
app.use(express.json()); //esto hace que cuando necesitemos recibir datos de un formulario, lo que hace es que lo convierte en un objeto json
app.use(express.urlencoded({extended: true})); //esto es para que pueda recibir datos de un formulario normal

//RUTAS
const rutas_articulos = require('./Rutas/Articulos'); //con esto estamos llamando a las rutas de articulos


//CARGAMOS LAS RUTAS, con esta se cargan todas las rutas que se hagan.
app.use('/api', rutas_articulos); //con esto estamos cargando las rutas de articulos





//RUTAS DE PRUEBA HARDCODEADAS
app.get("/probando",(req,res) => {  //esto es una ruta de prueba. Reque es lo que recibe y res es lo que responde))
    console.log("Hola mundo, probando la ruta"); //esto lo va a devolver por consola, pero necesitamos que lo devuelva por el navegador
    return res.status(200).json([{ //esto lo va a devolver por el navegador
        Nombre: "Javier",
        Apellido: "Garcia",
        Autor: "Javier Garcia",
    }]); 
});


//escuchar peticiones
app.listen(puerto, () => {  //esto es para que el servidor escuche peticiones
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});