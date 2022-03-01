// Selecting the input fields of the form
var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");

// This function calculates the amount of interest based on the parameters inserted on the form
function compute(){
    var interest = principal.value * years.value * rate.value / 100;
    var year = new Date().getFullYear() + parseInt(years.value);

    // Input validation for the principal value
    if(principal.value <= 0){
        alert("Enter a positive number")
        principal.focus();
    }
    else{
        const resultField = document.getElementById("result");
        const result = `If you deposit <mark>${principal.value}</mark>,<br> at an interest rate of <mark>${rate.value}%</mark>.<br> You will receive an amount of <mark>${interest}</mark>,</br> in the year <mark>${year}</mark>`;
        resultField.innerHTML = result;
        document.querySelector(".result_wrapper").classList.remove("hide");
    }
}

// This function shows the value that has been selected with the rate range input
function updateRate(){
    document.getElementById("rate_val").innerHTML = rate.value + "%";
}