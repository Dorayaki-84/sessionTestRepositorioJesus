//Creamos la clase Personaje
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
  celdaArma.innerHTML = personaje.arma;
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
  }
}

//Creamos el evento para que al pulsar el botón se ejecute la función de crearPersonaje o validarFormulario
let boton = document.getElementById("botonCrear");
boton.addEventListener("click", crearPersonaje);












