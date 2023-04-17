console.log('Bloque 1: Variables y Operadores');
// a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la 
// suma de ambos números en una 3er variable.
console.log('Ejercicio 1) a)');

var num1, num2, sum;
num1 = 5;
num2 = 8;
sum = num1 + num2;

console.log(sum);
// b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('Ejercicio 1) b)');

var text1, text2, sentence;
text1 = 'Hello, ';
text2 = 'whats up?';
sentence = text1 + text2;

console.log(sentence);
// c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
console.log('Ejercicio 1) c)');

var newText1, newText2;
newText1 = 'How';
newText2 = 'many?';
sumCharacters = newText1.length + newText2.length;

console.log(sumCharacters);