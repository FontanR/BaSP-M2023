// **************  VALIDATE NUMBERS  ********************
function haveInteger(string) {
    var chars = [];
    for (var i = 0; i < string.length; i++) {
        chars.push(parseInt(string[i]));
    }
    for (var i = 0; i < chars.length; i++) {
        if (!Number.isInteger(chars[i])) {
        } else {
            return true;
        }
    }
}
// **************  NAME  ********************
var firstName = document.getElementById('name');
firstName.addEventListener('keyup', isText);

function isText(e) {
    var text = e.target.value;
    if (!haveInteger(text) && text.length > 3) {
        firstName.onblur = function () {
            firstName.classList.remove('not-valid');
            firstName.classList.add('valid');
        }
    } else {
        firstName.onblur = function () {
            firstName.classList.remove('valid');
            firstName.classList.add('not-valid');
        }
    }
}

firstName.onfocus = function () {
    firstName.classList.remove('valid', 'not-valid');
}

// **************  FIRST NAME ********************
var lastName = document.getElementById('last-name');
lastName.addEventListener('keyup', isText);
// **************  DNI  ********************
var dni = document.getElementById('dni');
dni.addEventListener('keyup', isDNI);

function isDNI(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 7) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  BIRTH  ********************  Con formato dd/mm/aaaa.

// **************  PHONE  ********************
var phone = document.getElementById('phone');
phone.addEventListener('keyup', isPhone);

function isPhone(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 10) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  ADRESS ********************
var address = document.getElementById('address');
address.addEventListener('keyup', isAddress);

function isAddress(e) {
    var text = e.target.value;
    if (text.indexOf(' ') > 3 && text.toUpperCase() != text.toLowerCase() && haveInteger(text) && text.length >= 5) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  CITY  ********************
var city = document.getElementById('city');
city.addEventListener('keyup', isCity);

function isCity(e) {
    var text = e.target.value;
    if (text.length > 3) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  ZIP CODE  ********************
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('keyup', isZipCode);

function isZipCode(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 3 && text.length <= 5) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  EMAIL  ********************
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    return console.log(result);
}
// **************  PASS  ********************
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);

var savedPassword = '';
function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.indexOf(' ') == -1 && textPassword.toUpperCase() != textPassword.toLowerCase() && haveInteger(textPassword) && textPassword.length >= 8) {
        savedPassword = textPassword;
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  REPEAT PASS  ********************
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', isTheSamePassword);

function isTheSamePassword(e) {
    var textRepeatPassword = e.target.value;
    if (savedPassword == textRepeatPassword) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}