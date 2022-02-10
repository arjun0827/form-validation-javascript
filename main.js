const form = document.querySelector('form');
const names = document.getElementById('name');
const age = document.getElementById('age');
const password = document.getElementById('password');
const email = document.getElementById('email');
const mail = document.getElementById('mail');
const error = document.querySelector('#error1');
const error2 = document.querySelector('#error2');
const error3 = document.querySelector('#error3');
const error4 = document.querySelector('#error4');
const checkboxes = document.getElementById('checkbox');
const error5 = document.querySelector('#error5');


function nameFunc() {
    if (names.value.length === 0 || !names.value.match(/^[A-Za-z]+$/)) {
        error.classList.add('visible');
    }
    else {
        error.classList.remove('visible');
    }
}

function ageFunc() {
    if (age.value.length === 0 || !age.value.match(/^[-+]?[0-9]+$/) || age.value <= 0) {
        error2.classList.add('visible');
        
    }
    else {
        error2.classList.remove('visible');
    }
}

function passFunc() {
    if (password.value.length === 0 || !password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
        error3.classList.add('visible');
    }
    else {
        error3.classList.remove('visible');
    }
}

function mailFunc() {
    if (mail.value.length === 0 || !mail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        error4.classList.add('visible');
    }
    else {
        error4.classList.remove('visible');
    }
}

function checkFunc(){
    if(!checkboxes.checked){
        error5.classList.add('visible');
    }
    else {
        error5.classList.remove('visible');
    }
}

function clear() {
    form.reset();
}

function formHandler(event) {
    event.preventDefault();
    nameFunc();
    ageFunc();
    passFunc();
    mailFunc();
    checkFunc();
    clear();
    console.log("Hi i'm in")
}

form.addEventListener('submit', formHandler);
