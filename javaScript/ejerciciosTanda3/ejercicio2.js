
let hora = new Date().getHours(); // Obtenemos la hora actual
let nombreUsuario = prompt("Introduce tu nombre:"); // Pedimos el nombre del usuario

let greeting = {
    nombreUsuario: nombreUsuario,
    hora: hora,
};

if (hora < 12) {
    greeting = "Buenos días";
} else if (hora < 20) {
    greeting = "Buenas tardes";
} else {
    greeting = "Buenas noches";
}


console.log(greeting + " " + nombreUsuario);