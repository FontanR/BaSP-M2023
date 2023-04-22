// **************  VALIDACIONES  ********************


// **************  EMAIL  ********************
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail)

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    return console.log(result);
}

// **************  NUMEROS  ********************
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

// **************  PASS  ********************
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword)

var savedPassword = '';
function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.length >= 8 && textPassword.toUpperCase() != textPassword.toLowerCase() && haveInteger(textPassword)) {
        savedPassword = textPassword;
        return console.log(true);
    } else {
        return console.log(false);
    }
}

// **************  REPEAT PASS  ********************
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', isTheSamePassword)

function isTheSamePassword(e) {
    var textRepeatPassword = e.target.value;
    if (savedPassword == textRepeatPassword) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}