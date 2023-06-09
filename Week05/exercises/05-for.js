console.log('Bloque 5: For');
// a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log('Ejercicio: 5) a)');

var array = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for(var i = 0; i < array.length; i++) {
    alert(array[i]);
}

// b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('Ejercicio: 5) b)');

for(var i = 0; i < array.length; i++) {
    var wordUpper = array[i].substring(0,1).toUpperCase() + array[i].substring(1);
    alert(wordUpper);
}

// c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro
// de la variable sentence. Al final mostrar una única alerta con la cadena completa.
console.log('Ejercicio: 5) c)');

var sentence = '';
for(var i = 0; i < array.length; i++) {
    sentence += array[i] + ' ';
}

console.log(sentence);
// d) Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle
// for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('Ejercicio: 5) d)');

var newArray = []
for(var i = 0; i < 10; i++) {
    newArray.push(i);
}
console.log(newArray);