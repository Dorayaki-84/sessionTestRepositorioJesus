let minNuber = 0; //declaramos el numero minimo
let maxNumber = 100; //declaramos el numero maximo
let randomNumber = Math.floor(Math.random() * (maxNumber - minNuber + 1)) + minNuber; //esto es una formula establecida.

//generar un array de 20 numeros aleatorios entre minNumber y maxNumber
let arrayRandomNumbers = []; //declaramos el array
for (let i = 0; i < 20; i++) { //bucle para generar los 20 numeros aleatorios
    arrayRandomNumbers.push(Math.floor(Math.random() * (maxNumber - minNuber + 1)) + minNuber); //añadimos los numeros aleatorios al array
}
//mostrar el array
console.log(arrayRandomNumbers);

//mostrar el mayor y el menor
console.log("El mayor es: " + Math.max(...arrayRandomNumbers));
console.log("El menor es: " + Math.min(...arrayRandomNumbers));
