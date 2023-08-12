//From Validation
let registratioForm = document.querySelector('#registerForm');
registratioForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()){
        alert("Form Successfully Registered");
        location.reload();
    }
    else {
        alert("Form Was Not Successfully registered");
    }
});

let validateForm = () => {
    return(checkUserName() && checkEmail() && checkPassword() && checkConformPassword());
};

let checkUserName = () => {
    let inputEl = document.querySelector('#userName');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)) {
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
        inputFeedbackEl.innerText = "Minimum 4 charecters and maximum 10 charecters are allowed";
        return false;
    }
};


let checkEmail = () => {
    let inputEl = document.querySelector('#email')
    let inputFeedbackEl = document.querySelector('#email-feedback')
    let regExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else {
        makeInValid(inputEl,inputFeedbackEl);
        return false;
    }
};

let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(regExp.test(inputEl.value)) {
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
        return false;
    }
};

//conform Password
let checkConformPassword = () => {
    let inputEl = document.querySelector('#conformPassword');
    let inputFeedbackEl = document.querySelector('#conformPassword-feedback');
    let PasswordEl = document.querySelector('#password');
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(regExp.test(inputEl.value) &&  inputEl.value === PasswordEl.value) {
        makeValid(inputEl,inputFeedbackEl);
        inputFeedbackEl.innerText = "password matched successfully"
        return true;
    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
        inputFeedbackEl.innerText = "password is not correct"
        return false;
    }
};

//make valid 
let makeValid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText=("Looks Good");
};

//make valid 
let makeInValid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid')
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText=("Looks Bad");
};

let userNameEl = document.querySelector('#userName');
userNameEl.addEventListener('keyup', function() {
    checkUserName();
});

let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function() {
    checkEmail();
});
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function() {
    checkPassword();
});
let conformPasswordEl = document.querySelector('#conformPassword');
conformPasswordEl.addEventListener('keyup', function() {
    checkConformPassword();
});