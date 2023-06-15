let n1 = prompt("Introduzca un numero:");
let n2 = prompt("Introduzca un segundo número:");
let operacion = prompt("Introduzca un signo de operación:"); 

if (operacion == "/" ){
    alert(n1/n2)
} else if (operacion == "*"){
    alert("El restulado de la multiplicación es:" + n1*n2)
}
else {
    alert("operación incorrecta")
}