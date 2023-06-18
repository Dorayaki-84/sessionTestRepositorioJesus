

let tamaño = 5; //escribimos el tamaño de las columnas
let fila = "";//luego declaramos las filas vacias

for (let i = 0; i < tamaño; i++){ //recorre con i desde cero hasta tamaño ( 5 ) y ve subiendo i
     fila = "";

for (let j = 0; j < tamaño; j++){ //y luego j para las filas y las rellenas con lo que quieras
    fila += "v";
}

console.log(fila);
}