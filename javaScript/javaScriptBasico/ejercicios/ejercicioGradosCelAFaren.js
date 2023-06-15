let gCelsius = 273.15;  //Creamos la variable para los grados celsius
let gFarenheit = (gCelsius * 1.8) + 32; //añadimos la fórmula para pasar a Faren.
console.log(gFarenheit); //Esto es para ver si salía bien pero no es necesario.

switch (gCelsius){ //Creamos el switch y ponemos los casos posibles.
    
    case 273.15: 
    temperatura = "Es la temperatura del Zero absoluto, en Farenheit sería:"
    break;

    case 0: 
    temperatura = "Es el punto de congelación, en Farenheit sería:"
    break;

    //Habría que añadir las otras medidas.

    default: 
    console.log("Introduzca otra medida válida.")

} 

console.log(temperatura, + gFarenheit)