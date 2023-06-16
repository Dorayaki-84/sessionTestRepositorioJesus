let team = ["Dani", "Alicia","Juan","Ernesto",]; //Dani sería el 0, Alicia el 1 y Juan el 2. 
console.log(team[0]);// con team, accedemos a la variable y entre corchete ponemos el indice que queremos sacar.
console.log(team.length); //.lengt es lo último, así sabemos cuantos indices tiene una variable.
console.log(team[team.length - 1]); //El -1 es porque empieza desde cero y si hubiese 3 dentro del array, acceder al 3 sería imposible ya que el 3 es el 2 y SIEMPRE DEVUELVE EL
                                    //ULTIMO MIEMBRO DEL ARRAY
team.push("Lukka");//de esta forma colocamos un elmento más al array.
console.log(team)      
console.log(team[team.length - 1]);                              

//para sacar al azar los indices de un array

let min = 0; //va desde cero
let max = team.length -1 //hasta el último indice de un array

let number = -1;
number = Math.floor(Math.random() * (max - min +1)) + min;

console.log(team[number])

let estrellas = [];//Las arrays también pueden estar vacías
let team2 =[...team]//esto hace una copia por referencia de un array
console.log(team2)
//...team esto es un operador de propagación que te permite hacer algunas cosas como:

team = ["Alejandro", ...team]; //esto va a meter a alejandro en el array y luego todo el contenido y no da problemas de referencia.
console.log(team)

let colors = ["azul","negro","blanco"];
console.log(colors[0]); //muestra la posicion 0 dentro del array
colors[1]="Violeta"; //cambia  el negro por el violeta
console.log(colors[1]);
colors[3]="Purpura"; //añade un nuevo elmento al final llamado purpura
console.log(colors[3]);
console.log(colors.length);//nos dice cuantos elementos tiene el array

console.log(Array.from(colors.keys())); 
console.log(Array.from(colors.values()));//muestra los valores que tiene
console.log(Array.from(colors.entries())); //crea un array por cada uno de esos valores