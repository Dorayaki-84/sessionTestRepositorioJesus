function saludar(){  //aquí se declara la funcion llamada saludar
console.log("Hola como estás.") // y esto es lo que hace la función, mostrar por consola esa frase
}

saludar();

//Otro ejemplo de una suma

function sumar(num1, num2) {  //declaramos la funcion sumar que tendrá dos numeros
    let suma = num1 + num2;  //creamos la variable suma que será igual a la suma de los dos numeros
    return suma; //nos devuelve la suma
  }

  let resultado = sumar(5,4); //y ahora creamos la variable resultado que tendrá la funcion suma
  console.log(resultado)