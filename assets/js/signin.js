const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-button");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "test@temple.edu" && password === "test") {
        window.location.href = "index.html";
    } else {
        alert("Incorrect Login. Please try again.");
        loginErrorMsg.style.opacity = 1; 
    }
})
