var secondSection = document.getElementById("second-section");
var thirdSection = document.getElementById("third-section");
var firstSection = document.getElementById("first-section");

function enableNewUser() {
    secondSection.classList.remove("disabled");
    firstSection.classList.add("disabled");
}

function enableExistingUser() {
    thirdSection.classList.remove("disabled");
    firstSection.classList.add("disabled");
}

function saveUserInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    // Save user info to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);

    alert("Welcome " + username);
}

function checkCredentials() {
    var existingUsername = document.getElementById("existingUsername").value;
    var existingPassword = document.getElementById("existingPassword").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (existingUsername === storedUsername && existingPassword === storedPassword) {
        alert("Welcome back " + existingUsername);
    } else {
        alert("Invalid");
    }
}