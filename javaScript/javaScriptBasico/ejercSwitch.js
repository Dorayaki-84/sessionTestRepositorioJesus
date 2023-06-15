let lenguaje = "en";

switch (lenguaje){
    case "en":
    idioma = "Has elegido el ingles como idioma."
    break;

    case "es":
        idioma = "Has elegido el español como idioma."
    break;

    case "po":
        idioma = "Has elegido el polaco como idioma."
    break;
    default:
        console.log("Escriba un lenguaje válido o usamos el español.")
}

console.log(idioma)