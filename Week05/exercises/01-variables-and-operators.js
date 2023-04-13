/* Variables y Operadores
 Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la 
 suma de ambos números en una 3er variable.

 Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

 Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
 guardando el resultado de la suma en una 3er variable (utilizar length). */

// *****  1)  ******
var num1, num2, sum;
num1 = 5;
num2 = 8;
sum = num1 + num2;

// *****  2)  ******
var text1, text2, sentence;
text1 = 'Hello, ';
text2 = 'whats up?';
sentence = text1 + text2;

// *****  3)  ******
sumCharacters = text1.length + text2.length;
console.log(sumCharacters);