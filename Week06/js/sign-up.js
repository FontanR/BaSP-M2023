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
// **********  NAME  ***********   Solo letras y debe tener más de 3 letras y una mayus.
var firstName = document.getElementById('name');
firstName.addEventListener('keyup', isName);

function isName(e) {
    var text = e.target.value;
    if (text != text.toLowerCase() && !hasInteger(text) && !hasSymbol(text) && text.length > 3) {
        firstName.onblur = function () {
            firstName.classList.remove('not-valid');
            firstName.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        firstName.onblur = function () {
            firstName.classList.remove('valid');
            firstName.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have only letters and at least 3 digits');
            labelAlert.appendChild(textAlert);
            firstName.insertAdjacentElement('afterend', labelAlert);
        }
        firstName.onfocus = function () {
            firstName.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **********  LASTNAME ************   Solo letras y debe tener más de 3 letras y una mayus.
var lastName = document.getElementById('last-name');
lastName.addEventListener('keyup', isLastName);

function isLastName(e) {
    var text = e.target.value;
    if (text != text.toLowerCase() && !hasInteger(text) && !hasSymbol(text) && text.length > 3) {
        lastName.onblur = function () {
            lastName.classList.remove('not-valid');
            lastName.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        lastName.onblur = function () {
            lastName.classList.remove('valid');
            lastName.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have only letters and at least 3 digits');
            labelAlert.appendChild(textAlert);
            lastName.insertAdjacentElement('afterend', labelAlert);
        }
        lastName.onfocus = function () {
            lastName.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  EMAIL  ********************   Debe tener un formato de email válido.
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    if (result) {
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
// **************  BIRTH  ********************  Con formato dd/mm/aaaa.

// **************  DNI  ********************    Solo números y debe tener 7 números. SIN ESPACIOS
var dni = document.getElementById('dni');
dni.addEventListener('keyup', isDNI);

function isDNI(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && !hasSymbol(text) && text.length >= 7) {
        dni.onblur = function () {
            dni.classList.remove('not-valid');
            dni.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        dni.onblur = function () {
            dni.classList.remove('valid');
            dni.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 7 numbers.');
            labelAlert.appendChild(textAlert);
            dni.insertAdjacentElement('afterend', labelAlert);
        }
        dni.onfocus = function () {
            dni.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  PHONE  ********************    Solo números y debe tener 10 números. SIN ESPACIOS
var phone = document.getElementById('phone');
phone.addEventListener('keyup', isPhone);

function isPhone(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && !hasSymbol(text) && text.length >= 10) {
        phone.onblur = function () {
            phone.classList.remove('not-valid');
            phone.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        phone.onblur = function () {
            phone.classList.remove('valid');
            phone.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have 10 numbers.');
            labelAlert.appendChild(textAlert);
            phone.insertAdjacentElement('afterend', labelAlert);
        }
        phone.onfocus = function () {
            phone.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  ADRESS ********************   Al menos 5 caracteres con letras, números y si hay un espacio no puede estar ni en las primeras 3 posiciones ni en las ultimas 3.

var address = document.getElementById('address');
address.addEventListener('keyup', isAddress);

function isAddress(e) {
    var text = e.target.value;
    if (text.indexOf(' ') >= 3 && text.lastIndexOf(' ') <= text.length - 3 && text.toUpperCase() != text.toLowerCase() && hasInteger(text) && text.length >= 5) {
        address.onblur = function () {
            address.classList.remove('not-valid');
            address.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        address.onblur = function () {
            address.classList.remove('valid');
            address.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 5 letters, 1 number and a blank space.');
            labelAlert.appendChild(textAlert);
            address.insertAdjacentElement('afterend', labelAlert);
        }
        address.onfocus = function () {
            address.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  CITY  ********************   Texto alfanumérico y debe tener más de 3 letras y una mayus.
var city = document.getElementById('city');
city.addEventListener('keyup', isCity);

function isCity(e) {
    var text = e.target.value;
    if (text != text.toLowerCase() && !hasSymbol(text) && text.length - 3) {
        city.onblur = function () {
            city.classList.remove('not-valid');
            city.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        city.onblur = function () {
            city.classList.remove('valid');
            city.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 3 digits without symbols.');
            labelAlert.appendChild(textAlert);
            city.insertAdjacentElement('afterend', labelAlert);
        }
        city.onfocus = function () {
            city.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  ZIP CODE  ********************   Solo números y debe tener entre 4 y 5 números.
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('keyup', isZipCode);

function isZipCode(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && !hasSymbol(text) && text.length >= 4 && text.length <= 5) {
        zipCode.onblur = function () {
            zipCode.classList.remove('not-valid');
            zipCode.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        zipCode.onblur = function () {
            zipCode.classList.remove('valid');
            zipCode.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have between 4 and 5 numbers.');
            labelAlert.appendChild(textAlert);
            zipCode.insertAdjacentElement('afterend', labelAlert);
        }
        zipCode.onfocus = function () {
            zipCode.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}
// **************  PASS  ********************   Al menos 8 caracteres, formados por letras (una mayus) y números. Y sin espacios.
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);

var savedPassword = '';
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
            var textAlert = document.createTextNode('This input must have at least 8 characters with at least 1 upper case letter, 1 number and 1 symbol.');
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
// **************  REPEAT PASS  ********************
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', isTheSamePassword);

function isTheSamePassword(e) {
    var textRepeatPassword = e.target.value;
    if (savedPassword == textRepeatPassword) {
        repeatPassword.onblur = function () {
            repeatPassword.classList.remove('not-valid');
            repeatPassword.classList.add('valid');
        }
        return true;
    } else {
        var labelAlert;
        repeatPassword.onblur = function () {
            repeatPassword.classList.remove('valid');
            repeatPassword.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be exactly as the password input.');
            labelAlert.appendChild(textAlert);
            repeatPassword.insertAdjacentElement('afterend', labelAlert);
        }
        repeatPassword.onfocus = function () {
            repeatPassword.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
        return false;
    }
}