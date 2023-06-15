let shoopingCart = {
  Milk: {
    product_id: 01,
    name: "Milk", //recordar que si es nombre va con comillas, fallo de novato
    price: 1.25,
    quantity: 15,
  },
  Bread: {
    product_id: 02,
    name: "Bread",
    price: 0.95,
    quantity: 09,
  },
  Orange: {
    product_id: 03,
    name: "Orange",
    price: 2.9,
    quantity: 3,
  },
  Donuts: {
    product_id: 04,
    name: "Donut",
    price: 1.8,
    quantity: 4,
  },
};

for (let key in shoopingCart) { //con un ciclo for in recorremos todo el objeto. 
    console.log(shoopingCart[key]); //mostramos todo el recorrido.
}