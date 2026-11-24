
let number = Number(prompt("Enter a number:"));

if (number % 2 == 0) {
    document.getElementById("result").textContent =
        "The number is Even";
} else {
    document.getElementById("result").textContent =
        "The number is Odd";
}
