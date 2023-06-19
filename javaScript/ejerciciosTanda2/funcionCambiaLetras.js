function fraseOriginal(frase) {
 
    let nuevaFrase = ""; //Aquí almacenaremos la nueva frase
    
    
    for (i = 0; i < frase.length; i++) {
    let caracter = frase[i];
    let descomposicion = frase.split("");
    console.log(descomposicion);
    
    if (frase[i] == "e") {
      nuevaFrase += "3";
    } else if (frase[i] == "o") {
      nuevaFrase += "%";
    } else {
        nuevaFrase += caracter;
    }
  }
  console.log(nuevaFrase);
}

frase = "Que guapo es.";
fraseOriginal(frase);
