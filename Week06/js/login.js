// **************  VALIDATE NUMBERS  ********************
function hasInteger(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array.push(parseInt(string[i]));
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 1 == 0) {
            return true;
        }
    }
}
// **************  VALIDATE SYMBOLS  ********************
function hasSymbol(string) {
    var symbols = '!@#$%^&*()_+=-?/.,<>`~';
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < symbols.length; j++) {
            if (string[i] == symbols[j]) {
                return true;
            }
        }
    }
    return false;
}

// **************  EMAIL  ********************   Debe tener un formato de email válido.
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);
var savedEmail;
function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    if (result) {
        savedEmail = text;
        email.onblur = function () {
            email.classList.remove('not-valid');
            email.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        email.onblur = function () {
            email.classList.remove('valid');
            email.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be an email.');
            labelAlert.appendChild(textAlert);
            email.insertAdjacentElement('afterend', labelAlert);
        }
        email.onfocus = function () {
            email.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  PASS  ********************   Al menos 8 caracteres, formados por letras (una mayus) y números. Y sin espacios.
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);
var savedPassword;
function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.indexOf(' ') == -1 && hasSymbol(textPassword) && textPassword != textPassword.toLowerCase() &&
        textPassword.toUpperCase() != textPassword.toLowerCase() && hasInteger(textPassword) && textPassword.length >= 8) {
        savedPassword = textPassword;
        password.onblur = function () {
            password.classList.remove('not-valid');
            password.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        password.onblur = function () {
            password.classList.remove('valid');
            password.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be your password.');
            labelAlert.appendChild(textAlert);
            password.insertAdjacentElement('afterend', labelAlert);
        }
        password.onfocus = function () {
            password.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  LOGIN BUTTON  ********************
var loginBtn = document.getElementById('button');
loginBtn.addEventListener('click', validateSubmit);

function validateSubmit() {
    if (email.classList.contains('not-valid') || password.classList.contains('not-valid')) {
        alert('There are some inputs with incorrect information.');
    } else {
        alert('Your mail is: ' + savedEmail + '.\nYour password is: ' + savedPassword);
    }
}
