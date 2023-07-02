const express = require('express'); //con esto estamos llamando a express
const router = express.Router(); //con esto estamos llamando a router de express
const multer = require('multer'); //con esto estamos llamando a multer
const ArticulosControlador = require('../Controladores/Articulos'); //con esto estamos llamando al controlador de articulos

//VAMOS A CONFIGURAR DONDE GUARDA LAS IMAGENES MULTER
const almacenamiento = multer.diskStorage({
    destination: (req, file, cb) => { //esto es para que guarde la imagen en la carpeta publica
        cb(null, './imagenes/articulos'); //cb es para guardar las imagenes en una carpeta, el primer parametro es el error y el segundo es la ruta donde se guardan las imagenes
    },
    filename: (req, file, cb) => { //esto es para que guarde la imagen con el nombre original
        cb(null, file.originalname); 
    }
});

const subidas = multer({storage: almacenamiento}); //esto es para que guarde la imagen en la carpeta publica y subidas lo añadimos a la ruta de subir imagen


//Rutas de prueba

router.get("/ruta-de-prueba", ArticulosControlador.prueba); //esto es una ruta de prueba. Reque es lo que recibe y res es lo que responde))

//Rutas útiles  (Get es para enviar un recurso y post es para guardarlo en base de datos)

router.post ("/crear", ArticulosControlador.crear); //Esta ruta guardará los archivos
router.get("/articulos", ArticulosControlador.listar); //Esta ruta obtendrá los articulos
router.get("/articulo/:id", ArticulosControlador.uno); //Esta ruta obtendrá los articulos
router.delete("/articulo/:id", ArticulosControlador.borrar); //Esta ruta borrará el articulo seleccionado por el metodo delete
router.put("/articulo/:id", ArticulosControlador.editar); //Esta ruta editará el articulo seleccionado por el metodo put
router.post("/subir-imagen/:id", [subidas.single("file0")],ArticulosControlador.subir); //Esta ruta subirá la imagen del articulo seleccionado por el metodo post
router.get("/imagen/:fichero", ArticulosControlador.imagen); //esta ruta obtendrá la imagen del articulo seleccionado por el metodo get
router.get("/buscar/:busqueda", ArticulosControlador.buscar);


//agregamos una nueva ruta de prueba llamada cursos
router.get("/cursos", ArticulosControlador.cursos); //esto es una ruta de prueba. Reque es lo que recibe y res es lo que responde))

module.exports = router; //esto es para exportar las rutas, AHORA NOS VAMOS AL INDEX.JS PARA CARGAR LAS RUTAS!!