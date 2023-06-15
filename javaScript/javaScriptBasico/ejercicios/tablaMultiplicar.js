
//para una variable = a 1 hasta que sea igual o menor que diez (y sumando uno cad vez)
for (let number = 1; number <= 10; number++){
    console.log("Tabla del", number )
    console.log("----------------");
let multi = 1;
while (multi <= 10){ //Un while dentro de un for
    console.log ( number, "x", multi, "=", number * multi );
    multi++;
}
console.log("----------------");
}
