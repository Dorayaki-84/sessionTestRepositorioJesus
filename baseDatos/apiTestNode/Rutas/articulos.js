const express = require('express'); //con esto estamos llamando a express
const router = express.Router(); //con esto estamos llamando a router de express

const ArticulosControlador = require('../Controladores/Articulos'); //con esto estamos llamando al controlador de articulos

//Rutas de prueba

router.get("/ruta-de-prueba", ArticulosControlador.prueba); //esto es una ruta de prueba. Reque es lo que recibe y res es lo que responde))

//Rutas útiles  (Get es para enviar un recurso y post es para guardarlo en base de datos)

router.post ("/crear", ArticulosControlador.crear); //Esta ruta guardará los archivos
router.get("/articulos", ArticulosControlador.listar); //Esta ruta obtendrá los articulos

//agregamos una nueva ruta de prueba llamada cursos
router.get("/cursos", ArticulosControlador.cursos); //esto es una ruta de prueba. Reque es lo que recibe y res es lo que responde))

module.exports = router; //esto es para exportar las rutas, AHORA NOS VAMOS AL INDEX.JS PARA CARGAR LAS RUTAS!!