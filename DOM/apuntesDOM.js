let nav = document.querySelector('nav'); //se puede poner el nombre de la etiqueta o el nombre de la clase.
console.log(nav);

let active = document.querySelector('.active'); //ahora si se pone el nombre de la clase se pone un punto antes.
console.log(active);

let headersAndParagraphs = document.querySelectorAll('h1, p'); //de esta forma seleccionamos multiples elementos.
console.log(headersAndParagraphs[0].innerText) //De esta forma accedemos al texto en si del elemento. (al primero por la posicion 0)

//MOVERNOS POR EL DOM IGNORANDO EL TEXTO
//parentNode saltamos al elemento padre
//children[childNumber] saltamos a los elementos hijos
//firstElementChild salta al primer elemento hijo
//lastElementChild salta al ultimo elemento hijo
//nextElementSibling salta al siguiente elemento hermano
//previousElementSibling salta al elemento hermano anterior

//MOVERNOS POR EL DOM TENIENDO EN CUENTA EL TEXTO
//parentElement saltamos al elemento padre
//childNodes nos da una lista con los elementos hijos incluyendo el texto
//firstChild salta al primer elemento hijo
//lastChild salta al ultimo elemento hijo
//nextSibling salta al siguiente elemento hermano
//previousSibling salta al elemento hermano anterior
//nodeValue nos da el valor del texto
//nodeName nos da el nombre del nodo

//con ClassList podemos acceder a las clases de un elemento. Add para añadir una clase, remove la quita y toggle para añadir o quitar una clase.
//El atributo dataset nos permite acceder a los atributos data- de un elemento.
//con innerHTML podemos acceder al contenido html de un elemento, ignorando la etiqueta.
//con outerHTML podemos acceder al contenido html de un elemento, incluyendo la etiqueta.
// con insertAdjacentHTML podemos insertar contenido html en un elemento. (beforebegin, afterbegin, beforeend, afterend)

//CREAR, INSERTAR O ELIMINAR NODOS
// append() and prepend() arguments can be Node objects or strings.
// let header = document.createElement("h1"); // Create an empty <h1> element
// header.append("Hello, World!"); // Adding a string to <h1>
// header.prepend("¡"); // Adding more characters at start of <h1>
// document.body.append(header);// Adding the <h1> to body
// // after() and before() work on both Element and Text nodes
// document.querySelector("h1").firstChild.before("¡¡"); // Adding more text before text
// let paragraph = document.createElement("p");// Creating a new paragraph
// paragraph.textContent = "Writting a paragraph";// Adding some text
// document.querySelector("h1").after(paragraph);// Adding the <p> after <h1>
// // replaceWith() and remove() methods
// document.querySelector("h1").replaceWith(paragraph);
// paragraph.remove();