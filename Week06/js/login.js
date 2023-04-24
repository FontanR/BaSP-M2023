// **************  VALIDATIONS  ********************
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    return console.log(result);
}

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

var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);

function isPassword(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() != text.toLowerCase() && haveInteger(text) && text.length >= 8) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}