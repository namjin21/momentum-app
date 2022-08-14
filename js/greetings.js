const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // This is same as document.querySelector("#login-form button")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showContentForLoggedInUser(username);
}

const showContentForLoggedInUser = (username) => {
    greeting.textContent = `Hello ${username} 🌍`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    todoField.classList.remove(HIDDEN_CLASSNAME);
    quote.classList.remove(HIDDEN_CLASSNAME);
}

const weather = document.getElementById("weather");
const clock = document.getElementById("clock");
const todoField = document.getElementById("todo-field");
const quote = document.getElementById("quote");

const localStorageUsername = localStorage.getItem(USERNAME_KEY);
if (localStorageUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showContentForLoggedInUser(localStorageUsername);
}
