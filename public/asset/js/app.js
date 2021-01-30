const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// const username = document.getElementById("username");
// console.log(username.value);

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

const form = document.getElementById("signup");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirms = document.getElementById("confirmPassword");

// validation for sign up
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});
// check user input
function checkInputs() {
    // get value from the input
    // const nameValue = username.values.trim();
    const nameValue = username.values;
    const emailValue = email.values;
    const passwordValue = password.values;
    const confirmsValue = confirms.values;

    if (nameValue === "") {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (confirmsValue === "") {
        setErrorFor(confirms, "Passwords cannot be blank");
    } else if (passwordValue !== confirmsValue) {
        setErrorFor(confirms, "Passwords does not match");
    } else {
        setSuccessFor(confirms);
    }
}

function setErrorFor(input, message) {
    const inputField = input.parentElement;
    const small = inputField.querySelector("small");
    inputField.className = "input-field error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "input-field success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}