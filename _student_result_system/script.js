
// Array to store student records

let students = [];


// Function to calculate grade

function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    }

    else if (percentage >= 80) {
        return "A";
    }

    else if (percentage >= 70) {
        return "B";
    }

    else if (percentage >= 60) {
        return "C";
    }

    else if (percentage >= 50) {
        return "D";
    }

    else {
        return "F";
    }

}


// Function to add student

function addStudent() {

    let name = document.getElementById("name").value;

    let maths = document.getElementById("maths").value;

    let science = document.getElementById("science").value;

    let computer = document.getElementById("computer").value;


    // Check student name

    if (name.trim() == "") {

        document.getElementById("message").textContent =
            "Please enter student name";

        return;
    }


    // Check empty marks

    if (maths == "" || science == "" || computer == "") {

        document.getElementById("message").textContent =
            "Please enter all subject marks";

        return;
    }


    // Convert marks into numbers

    maths = Number(maths);

    science = Number(science);

    computer = Number(computer);


    // Validate marks

    if (maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        computer < 0 || computer > 100) {

        document.getElementById("message").textContent =
            "Error: Marks must be between 0 and 100";

        return;
    }


    // Calculate total

    let total = maths + science + computer;


    // Calculate percentage

    let percentage = (total / 300) * 100;


    // Calculate grade

    let grade = calculateGrade(percentage);


    // Create student object

    let student = {

        name: name,

        total: total,

        percentage: percentage,

        grade: grade

    };


    // Store student in array

    students.push(student);


    // Display success message

    document.getElementById("message").textContent =
        "Result calculated successfully";


    // Clear input fields

    document.getElementById("name").value = "";

    document.getElementById("maths").value = "";

    document.getElementById("science").value = "";

    document.getElementById("computer").value = "";

}


// Function to generate student list

function generateList() {

    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";


    // Check if array is empty

    if (students.length == 0) {

        studentList.textContent = "No student records available";

        return;
    }


    // Create table

    let table = document.createElement("table");


    // Create table heading

    let heading = table.insertRow();

    let headings = [
        "Student Name",
        "Total Marks",
        "Percentage",
        "Grade"
    ];

    for (let i = 0; i < headings.length; i++) {

        let th = document.createElement("th");

        th.textContent = headings[i];

        heading.appendChild(th);

    }


    // Loop through student records

    for (let i = 0; i < students.length; i++) {

        let row = table.insertRow();

        let nameCell = row.insertCell();

        let totalCell = row.insertCell();

        let percentageCell = row.insertCell();

        let gradeCell = row.insertCell();


        nameCell.textContent = students[i].name;

        totalCell.textContent = students[i].total;

        percentageCell.textContent =
            students[i].percentage.toFixed(2) + "%";

        gradeCell.textContent = students[i].grade;

    }


    // Display table

    studentList.appendChild(table);

}
