const usernameValidation = /^[a-zA-Z\-]+$/;
const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;



document.querySelector(".submit").addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = document.getElementById("user").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const correctingPasswordInput = document.getElementById("passwordCorrect").value;

    const userValid = document.getElementById("user-control");
    const emailValid = document.getElementById("email-control");
    const passwordValid = document.getElementById("password-control");
    const passwordCorrectingValid = document.getElementById("passwordCorrecting-control");

    if (validation(userInput, "userInput") == true) {
        userValid.classList.remove("invalid");
        userValid.classList.add("valid");
    } else {
        userValid.classList.remove("valid");
        userValid.classList.add("invalid");
    }


    if (validation(emailInput, "emailInput") == true) {
        emailValid.classList.remove("invalid");
        emailValid.classList.add("valid");
    } else {
        emailValid.classList.remove("valid");
        emailValid.classList.add("invalid");
    }


    if (validation(passwordInput, "passwordInput") == true) {
        passwordValid.classList.remove("invalid");
        passwordValid.classList.add("valid");
    } else {
        passwordValid.classList.remove("valid");
        passwordValid.classList.add("invalid");
    }
    if (validation(correctingPasswordInput, "correctingPasswordInput") == true) {
        passwordCorrectingValid.classList.remove("invalid");
        passwordCorrectingValid.classList.add("valid");
    } else {
        passwordCorrectingValid.classList.remove("valid");
        passwordCorrectingValid.classList.add("invalid");
    }



})

const validation = (inputValue, input) => {

    if (input == "userInput") {
        console.log(inputValue);
        return (usernameValidation.test(inputValue));
    } else if (input == "emailInput") {
        console.log(inputValue);
        return (emailValidation.test(inputValue));
    } else if (input == "passwordInput" || input == "correctingPasswordInput") {
        console.log(inputValue);
        return (passwordValidation.test(inputValue));
    }
}



