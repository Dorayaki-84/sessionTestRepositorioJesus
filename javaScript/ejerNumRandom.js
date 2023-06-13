
let n1 =  Math.ceil(Math.random()*6); //creamos la variable con el método math que nos da un numero al azar.
let n2 =  Math.ceil(Math.random()*6);


console.log(n1); //mostarmos la variable
console.log(n2);


if (n1 > n2){ // creamos una condición con los diferentes resultados
    resultado = ("Player 1 Win!") // aquí hemos creado la variable resultado que guarda el valor según lo que ocurra.
} else if (n1 < n2) {
    resultado = ("Player 2 Win!")
} else {
    resultado = ("Draw")
}


console.log(resultado) // por ultimo, mostramos la variable