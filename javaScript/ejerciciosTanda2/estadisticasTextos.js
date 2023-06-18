function estadisticas(texto) {  //Se crea la funcion estadistica con la variable texto
   
    let largoTexto = texto.length; //se crea todo lo que hará la funcion
    let textoSinEspacios = texto.replace(/ /g, "");
    let longitud = textoSinEspacios.length;

    console.log("Largo del texto (con espacios): " + largoTexto); //luego mostrará todo lo que queramos.
    console.log("Largo del texto (sin espacios): " + longitud);
}

texto = "Me voy a comer un donut.";  //aquí sustituimos la variable texto por el texto que sea
estadisticas(texto) //y llamamos a la funcion

