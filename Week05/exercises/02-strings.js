/* Strings

1) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var eminemHit, eminemHitUpper;
eminemHit = 'Hi! My name is. What? My name is. Who? My name is. Chiki-chiki, Slim Shady!';
eminemHitUpper = eminemHit.toUpperCase();

//  2) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).

var lyrics = 'Now this looks like a job for me. So everybody, just follow me!';
var firstLyrics = lyrics.substring(0,5);

// 3) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva
// variable (utilizar substring).

var lastLyrics = lyrics.substring(lyrics.length - 3);           // I reuse the var lyrics

// 4) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado 
// en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var firstLetter, restOfLyric, lyricsLower;                      // I reuse the var lyrics
lyricsLower = lyrics.toLocaleLowerCase();
firstLetter = lyricsLower.substring(0,1);
firstLetter = firstLetter.toLocaleUpperCase();
restOfLyric = lyricsLower.substring(1);

// 5) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable
// (utilizar indexOf).

var indexBlank = lyrics.indexOf(' ');                           // I reused the var lyrics

// 6) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
// anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

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