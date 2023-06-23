let nav = document.querySelector('nav'); //se puede poner el nombre de la etiqueta o el nombre de la clase.
console.log(nav);

let active = document.querySelector('.active'); //ahora si se pone el nombre de la clase se pone un punto antes.
console.log(active);

let headersAndParagraphs = document.querySelectorAll('h1, p'); //de esta forma seleccionamos multiples elementos.
console.log(headersAndParagraphs[0].innerText) //De esta forma accedemos al texto en si del elemento. (al primero por la posicion 0)