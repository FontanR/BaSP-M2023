/* Arrays

1) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nombember', 'December'];
console.log(months[4]);
console.log(months[10]);

// 2) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

months.sort();

// 3) Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.push('apple');
months.unshift('banana');

// 4) Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.pop();
months.shift();

// 5) Invertir el orden del array (utilizar reverse).

months.reverse();

// 6) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

string = months.join();

// 7) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nombember', 'December'];
notAllMonths = months.slice(4, 11);
