console.log('Bloque 2: Strings');
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('Ejercicio: 2) a)');

var eminemHit, eminemHitUpper;
eminemHit = 'Hi! My name is. What? My name is. Who? My name is. Chiki-chiki, Slim Shady!';
eminemHitUpper = eminemHit.toUpperCase();

console.log(eminemHitUpper);
//  b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
console.log('Ejercicio: 2) b)');

var lyrics = 'Now this looks like a job for me. So everybody, just follow me!';
var firstLyrics = lyrics.substring(0,5);

console.log(firstLyrics);
// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
console.log('Ejercicio: 2) c)');

var newLyrics = 'You better lose yourself in the music, the moment. You own it, you better never let it go!'
var lastLyrics = newLyrics.substring(newLyrics.length - 3);

console.log(lastLyrics);
// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado 
// en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('Ejercicio: 2) d)');

var firstLetter, restOfLyric, lyricsLower;
var anotherLyrics = 'You only get one shot, do not MISS your chance to blow. This opportunity COMES once in a lifetime!';

var anotherLyricsLower = anotherLyrics.toLocaleLowerCase();
firstLetter = anotherLyricsLower.substring(0,1);
firstLetter = firstLetter.toLocaleUpperCase();
restOfLyric = anotherLyricsLower.substring(1);

console.log(firstLetter + restOfLyric);
// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable
// (utilizar indexOf).
console.log('Ejercicio: 2) e)');

var godzillaLyrics = 'Better hit the deck like the card dealer'
var indexBlank = godzillaLyrics.indexOf(' ');

console.log(indexBlank);
// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
// anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('Ejercicio: 2) f)');

var sentence, sentenceLower,firstBlank, lastBlank, firstWord, secondWord, textBetween, firstWordUpper, secondWord, secondWordUpper, newSentence;
sentence = 'siMpsONs     yVAn eHT niOJ      baRTOlomEo';

sentenceLower = sentence.toLowerCase();
firstBlank = sentenceLower.indexOf(' ');
lastBlank = sentenceLower.lastIndexOf(' ');

firstWord = sentenceLower.substring(0, firstBlank);
secondWord = sentenceLower.substring(lastBlank + 1);
textBetween = sentenceLower.substring(firstBlank, lastBlank)

firstWordUpper = firstWord.substring(0,1).toLocaleUpperCase() + firstWord.substring(1);
secondWordUpper = secondWord.substring(0,1).toLocaleUpperCase() + secondWord.substring(1);
newSentence = firstWordUpper + textBetween + secondWordUpper;

console.log(newSentence);