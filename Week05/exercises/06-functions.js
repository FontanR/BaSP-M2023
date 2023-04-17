console.log('Bloque 6: Funciones')
/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.*/
console.log('Ejercicio 6) a)');

var total, number, num1, num2;

function sum(num1,num2) {
    return num1 + num2;
}
total = sum(99,1);

console.log(total);
// b) Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que
// uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('Ejercicio 6) b)');

function sumWithValidation(num1,num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        alert('Error. WE NEED NUMBERS!!');
        return NaN;
    } else {
        return num1 + num2;
    }
}
total = sumWithValidation(50,150);

console.log(total);
// 3) Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('Ejercicio 6) c)');

function validateInteger(number) {
    if(number % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validateInteger(8));
// d) Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que
// haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
console.log('Ejercicio 6) d)');

function validation(number) {
    if(typeof number != 'number') {
        alert('Error. WE NEED NUMBERS!!');
        return NaN;
    } else if(!validateInteger(number)) {
        number = Math.round(number);
        alert('Your number is not a integer... But we did it for you: ' + number);
        return number;
    } else {
        return number;
    }
}

console.log(validation(19.8));
// e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.
console.log('Ejercicio 6) e)');

function validateNumber(number) {
    if(typeof number != 'number') {
        alert('Error. WE NEED NUMBERS!!');
        return NaN;
    } else {
        return true;
    }
}

function validateIntegerAndRound(number) {
    if(!validateInteger(number)) {
        number = Math.round(number)
        alert('Your number is not a integer... But we did it for you: ' + number);
        return number;
    } else {
        return number;
    }
}

function bothValidations(number) {
    if(validateNumber(number)) {
        return validateIntegerAndRound(number);
    } else {
        return NaN;
    }
}

function superSum(num1, num2) {
    var validatedNum1 = bothValidations(num1);
    var validatedNum2 = bothValidations(num2);
    return validatedNum1 + validatedNum2;
}
console.log(superSum(1.9, 7.8));