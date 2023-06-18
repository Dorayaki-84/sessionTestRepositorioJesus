let temperatura = [19,20,23,24,18,21,22] //declaro las temperaturas

let suma = 0; //declaro una variable para acumular la suma del ciclo for
let cantidad = temperatura.length; //y una cantidad igual de larga que todos los elementos de temperatura

for (i=0; i < cantidad; i++){ 
    suma += temperatura[i]; //suma = suma + todos los recorridos de temperatura (con el i)
};

let media = suma / cantidad; //ahora sacamos una variable donde recoge la suma de todas las veces que ha pasado el ciclo dividido entre lo largo que es Temperatura
console.log(media);