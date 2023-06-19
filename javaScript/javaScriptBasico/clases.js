// class villains {}  sintaxis básica, debe de tener un proposito por ejemplo guardar las caracteristicas de objetos y guardarlos en una base de datos.

class villains {
  constructor(character, name) {
    //los constructores crean objetos similares a la case que estamos creando, creará villanos con nombre poderes o bios..
    this.character = character;
    this.name = name;  //el this se usa para llamar a los parametros de un constructor.
    this.power = [];
    this.bio = ""; //hasta ahora estamos creando un objeto y le estamos dando una serie de valores.
  }
  set powers(newPower) {
    //con este metodo vamos a añadir poderes al array vacio de power.
    this.powers.push(newPower); //con esto se introduce esos poderes al array.
  }
  get powers() {
    console.log(this.power.join(","));  //join coge todos los valores de un array y lo separa por ,
  }

  static villainsBio(){     //estamos creando una clase estatica para la bio
    this.bio = "Texto que tengas en algun lado."
    console.log(this.bio);
  }

}

//ahora creamos el primer villano

let octopus = new villains("Octopus", "Michael Beks",)   //aquí estamos creando un nuevo objeto con todos los datos del constructor de villains.
octopus.power = "Multi-Tentacles";  //de esta forma estamos introduciendo valores al array vacio.
octopus.power = "Tinta venenosa";
octopus.power //si lo dejamos vacio ya muestra los poderes porque trae un consolo.log de base.
villains.villainsBio() //así se llama a los metodos estáticos.

console.log(octopus);