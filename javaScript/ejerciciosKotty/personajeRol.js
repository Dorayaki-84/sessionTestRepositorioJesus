//LO QUE SE PIDE
// 1Crea una pantalla en la que aparezca un título llamado crear personaje.
// Con varios promts
// Raza, nombre,sexo,armas, asesinatos 

// Crea un objeto llamado Personaje que tenga los siguientes atributos.
// Raza: string
// Sexo: string
// Arma: string
// Asesinatos: int

// Y casa vez que introduzca todos los datos pinta el objeto creado por consola
// Has creado el siguiente personaje: y los datos que hayas introducido

//EJERCICIO

let Raza = prompt("Vamos a crear un personaje, introduce la raza:");
let Nombre = prompt("Ahora introduce el nombre:");
let Sexo = prompt("Muy bien, ¿puedes decirme el sexo?");
let Arma = prompt("¿Con qué arma ataca tu personaje?");
let Asesinatos = prompt("Y por último, ¿Cuantos asesinatos ha hecho?");

while (isNaN(Asesinatos)){  //Aquí pongo esto para que se asegure que se escribe un numero
    alert("Ponga un número no caracteres por favor.") //si pone letras...
    Asesinatos = prompt("Y por último, ¿Cuantos asesinatos ha hecho?"); //y si pone numeros salta aquí
}

//Ahora creo el objeto personaje que va a tener toda la información del prompt

let personaje = {
    Raza: Raza,
    Nombre: Nombre,
    Sexo: Sexo,
    Arma: Arma,
    Asesinatos: Asesinatos
  };
  
console.log("Has creado el siguiente personaje:");
console.log(personaje); //y por ultimo pasamos a consola el resultado.
