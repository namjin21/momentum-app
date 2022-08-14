const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // This is same as document.querySelector("#login-form button")
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    setShowGreeting(username);
}

const setShowGreeting = (username) => {
    greeting.textContent = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.classList.remove(HIDDEN_CLASSNAME);
}

const localStorageUsername = localStorage.getItem(USERNAME_KEY);
if (localStorageUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    setShowGreeting(localStorageUsername);
}

const onLogoutClick = () => {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
}

logoutButton.addEventListener("click", onLogoutClick);