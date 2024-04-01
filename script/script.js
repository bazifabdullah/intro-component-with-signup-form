const form = document.getElementById('form');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();
    var pattern = "!#$%&'*+-/=?^_`{|}~";

    if (firstName === '') {
        errorFnc(fname, 'First Name cannot be empty')
    } else {
        successFnc(fname)
    }
    if (lastName === '') {
        errorFnc(lname, 'last Name cannot be empty')
    } else {
        successFnc(lname)
    }
    if (emailVal === '') {
        errorFnc(email, "Doesn't look like an email")
    } else if (!emailVal.match(pattern)) {
        errorFnc(email, "Doesn't look like an email")
    } else {
        successFnc(email)
    }
    if (passwordVal === '') {
        errorFnc(password, 'Password cannot be empty')
    } else {
        successFnc(password)
    }
})

function errorFnc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.classList.add('error');
    span.classList.add('error-text');
}

function successFnc(req) {
    req.classList.add('success');
}