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
    } else {
        var labelAlert;
        email.onblur = function () {
            email.classList.remove('valid');
            email.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be an email.');
            labelAlert.appendChild(textAlert);
            var divEmail = document.querySelector('.mail-input');
            divEmail.insertAdjacentElement('beforeend', labelAlert);
        }
        email.onfocus = function () {
            email.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}

var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);
var savedPassword;

function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.indexOf(' ') == -1 && hasSymbol(textPassword) && textPassword != textPassword.toLowerCase() &&
        textPassword != textPassword.toUpperCase() && hasInteger(textPassword) && textPassword.length >= 8) {
        savedPassword = textPassword;
        password.onblur = function () {
            password.classList.remove('not-valid');
            password.classList.add('valid');
        }
    } else {
        var labelAlert;
        password.onblur = function () {
            password.classList.remove('valid');
            password.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be your password.');
            labelAlert.appendChild(textAlert);
            var divPassword = document.querySelector('.password-input');
            divPassword.insertAdjacentElement('beforeend', labelAlert);
        }
        password.onfocus = function () {
            password.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}

var loginBtn = document.getElementById('button');
loginBtn.addEventListener('click', validateSubmit);
var alerts = [];

function validateSubmit() {
    if (email.classList.contains('not-valid') || email.value == '') {
        alerts.push('Email: This input must be an email.');
    }
    if (password.classList.contains('not-valid') || password.value == '') {
        alerts.push('Password: At least 8 characters with at least 1 upper case letter, 1 lower case, 1 number and 1 symbol.');
    }
    if (alerts.length > 0) {
        alert(alerts.join('\n'));
        alerts = [];
    } else {
        var url = 'https://api-rest-server.vercel.app/login?email=' + savedEmail + '&password=' + savedPassword;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                alert(data.msg);
            })
            .catch(function () {
                alert('ERROR: Server or route error.');
            });
    }
}
