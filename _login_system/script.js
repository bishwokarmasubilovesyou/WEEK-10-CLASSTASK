
let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username == "admin" && password == "12345") {

    document.getElementById("result").textContent =
        "Login Successful";

} else {

    document.getElementById("result").textContent =
        "Invalid Username or Password";

}
