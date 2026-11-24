
document.getElementById("calculateButton").addEventListener("click", function() {

    let input = document.getElementById("marks").value;

    let marks = Number(input);

    let grade;

    if (input == "") {

        grade = "Please enter marks";

    }

    else if (marks < 0 || marks > 100) {

        grade = "Invalid Marks";

    }

    else if (marks >= 90) {

        grade = "A+";

    }

    else if (marks >= 80) {

        grade = "A";

    }

    else if (marks >= 70) {

        grade = "B";

    }

    else if (marks >= 60) {

        grade = "C";

    }

    else if (marks >= 50) {

        grade = "D";

    }

    else {

        grade = "F";

    }

    document.getElementById("result").textContent =
        "Grade: " + grade;

});
