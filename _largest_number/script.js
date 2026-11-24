
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {

    document.getElementById("result").textContent =
        "Largest number is: " + num1;

}

else if (num2 >= num1 && num2 >= num3) {

    document.getElementById("result").textContent =
        "Largest number is: " + num2;

}

else {

    document.getElementById("result").textContent =
        "Largest number is: " + num3;

}
