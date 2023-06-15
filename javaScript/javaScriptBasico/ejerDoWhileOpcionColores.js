let option = null; //declaramos la variable con null para no colocarle un valor y sea mas comodo para trabajar
let colors = ["Red", "Blue", "Green"]; //declaramos el array con las opciones

//mirar como se hace el ciclo for aquí
do {
  // el do while es..haces esto mientras la condicion se cumpla (la condicion del while de abajo)
  console.log("Choose one color:");
  for (let index = 0; index < colors.length; index++) {
    console.log(index + 1 + "." + colors[index]); //el +1 del index es para que no empiece por 0 que queda raro.
  }
  console.log("Press 0 to exit:"); //Esto es por ejemplo para decirle al usuario que is pulsa 0 sale del programa.
  option = prompt("Make your choice"); //aquí ya le preguntamos al usuario que coja la opcion y vemos los casos con un switch

  switch (
    option //creamos la interacción con el usuario según lo que ponga en la opcion. Con la variable opcion
  ) {
    case "1":
      console.log("%c Hex code for red= #F0003"); //con el "%c se puede poner otro color para el console log (añadir despues del texto "Con el color del css")
      break;
    case "2":
      console.log("Hex code for blue= #F0002");
      break;
    case "3":
      console.log("Hex code for green= #F0001");
      break;

    default:
      if (option != 0) {
        console.warn("Not a valid option, please try again."); //.warn hace que el mensaje salga amarillo.
      } else {
        console.log("Exiting...see you soon.");
      }
      break;
  }
} while (option != 0); //esta es la condicion para que se ejecute todo el bucle (programa) por eso si pulsa 0 se va a salir.
