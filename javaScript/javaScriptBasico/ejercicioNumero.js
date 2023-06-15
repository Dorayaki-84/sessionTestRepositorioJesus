let num = 60;

//Como el resultado va a ser booleano, ponemos en el switch que la condicion sea true(veradera) y si se cumple se ejecuta.
switch (true){
    case num <= 0:
    console.log("Este número es menor que cero")
    break;
    case num > 0 && num <= 10:
    console.log("Este número está entre uno y diez.")
    break;
    case num > 10 && num <=20:
    console.log("Este número está entre 11 y 20.")
    break;
    case num > 20:
    console.log("Este número es mayor que veinte")
    break;
    default:
        console.log("Introduzca un valor")
}