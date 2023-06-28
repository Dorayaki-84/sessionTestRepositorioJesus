//Creamos la clase Personaje que actuara como plantilla para crear los personajes
class Personaje {
  constructor(nombre, raza, sexo, arma, asesinatos) {
    this.nombre = nombre;
    this.raza = raza;
    this.sexo = sexo;
    this.arma = arma;
    this.asesinatos = asesinatos;
  }
}

//Creamos la función para crear el personaje
function crearPersonaje() {
  event.preventDefault();
  let nombre = document.getElementById("Nombre").value;
  let raza = document.getElementById("Raza").value;
  let sexo = document.getElementById("Sexo").value;
  let arma = document.getElementById("Arma").value;
  let asesinatos = document.getElementById("Asesinatos").value;

  //si asesinatos no es un número salta un alert, como veo lo he colocado en la funcion crearPersonaje
  if (isNaN(asesinatos)) {
    alert("El campo de asesinatos debe ser un número");
    return;
  }

  let personaje = new Personaje(nombre, raza, sexo, arma, asesinatos);
  let tabla = document.getElementById("tablaC");
  let fila = document.createElement("tr");
  let celdaNombre = document.createElement("td");
  let celdaRaza = document.createElement("td");
  let celdaSexo = document.createElement("td");
  let celdaArma = document.createElement("td");
  let celdaAsesinatos = document.createElement("td");
  celdaNombre.innerHTML = personaje.nombre;
  celdaRaza.innerHTML = personaje.raza;
  celdaSexo.innerHTML = personaje.sexo;
  //en la celda arma quiero capturar el valor del select, no el texto

  celdaArma.innerHTML = document.getElementById("Arma").value;
  celdaAsesinatos.innerHTML = personaje.asesinatos;
  fila.appendChild(celdaNombre);
  fila.appendChild(celdaRaza);
  fila.appendChild(celdaSexo);
  fila.appendChild(celdaArma);
  fila.appendChild(celdaAsesinatos);
  tabla.appendChild(fila);
}

//Si pulsa el boton de enviar sin datos en el formulario salta un alert esto se hace mediante una función

function validarFormulario() {
  let nombre = document.getElementById("Nombre").value;
  let raza = document.getElementById("Raza").value;
  let sexo = document.getElementById("Sexo").value;
  let arma = document.getElementById("Arma").value;
  let asesinatos = document.getElementById("Asesinatos").value;

  if (nombre == "" || raza == "" || sexo == "" || arma == "" || asesinatos == "") {
    alert("Debes rellenar todos los campos");
    
    return true; //con esto detengo la ejecución de la función crearPersonaje que llega despues.

  }
  
}


//Creamos el evento para que al pulsar el botón se ejecute la función de crearPersonaje o validarFormulario según si
//está relleno o no el formulario.

let boton = document.getElementById("botonCrear");

boton.addEventListener("click", function () {
  if (!validarFormulario()) {
    crearPersonaje();
  } else {
    
  }
});













