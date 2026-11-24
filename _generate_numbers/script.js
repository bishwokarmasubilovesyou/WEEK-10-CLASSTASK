
document.getElementById("generateButton").addEventListener("click", function() {

    let output = "";

    for (let i = 1; i <= 20; i++) {

        if (i % 2 == 0) {

            output += "<span class='even'>" + i + "</span> ";

        } else {

            output += "<span class='odd'>" + i + "</span> ";

        }

    }

    document.getElementById("result").innerHTML = output;

});
