//syntaxis general

// let star = {
// name: "Polaris",
// constallation: "Ursa minor",
// type: "Double",
// spectralCass: "F7",
// mag: 2.0,
// };
// console.log(star.name) //con el nombre.valor, mostramos el valor
// star.constallation = "Ursa mayor" //podemos cambiar los valores
// console.log(star.constallation)

// //los objetos se copian por referencia, esto no se puede hacer.
// let star2 = star;
// star2.name = "Mirza";
// star.mag = 3.0;
// console.log(star2.name)
// console.log(star.name)

// //Ejemplo de copian por valor, aunque num1 y num 2 valen 4, se almacenan en espacios de memoria diferente
// // let num1 = 4;
// // let num2 = num1;
// // console.log(num2)
// // num2 = 7;
// // console.log(num1)
// // console.log(num2)

//ejercicio de objeto (los objetos son colecciones de propiedas sin ordenar pero identificadas.)

let hero = {
  character: "Iron man",
  name: "Tony Stark",
  powers: [
    //esto es un array dentro de un objeto [
    "Genius level intellect",
    "Fly",
    "Multiple armor-things",
  ],
  info: {
    //Y esto es un objeto dentro de un objeto
    yearCreated: 1963,
    powerOrigin: "His suit",
    weapons: ["repulsor-gun", "laser", "mega punch"],
    didYouKnow:
      "Tony Stark created one of the best armor from spider-man. They are a really best friends",
  }, //recordar siempre cerra la coma
}; //recordar el punto y coma

let hero2 = new Object() // con esto vamos a crear un nuevo heroe basándonos en ese prototipo objetc
hero2.character = "Hulk",
hero2.name = "Brus Banner",
hero2.powers = [
    "Super force",
    "Breath under water",
];

console.log(Object.keys(hero2)); //con esto sacamos las propiedas de un objeto
