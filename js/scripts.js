function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) { 
    return num1 / num2;
}

function clearForm() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "Add";
    document.querySelector("p").classList.add("hidden");
}

function displayResult() {
    document.querySelector("p").classList.remove("hidden");
}

function handleCalculation(e){
    e.preventDefault();
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    const operator = document.getElementById("operator").value;

    let result;

    if (operator == "Add") {
        result = add(num1, num2);
    } else if (operator == "Subtract") {
        result = subtract(num1, num2);
    } else if (operator == "Multiply") {
        result = multiply(num1, num2);
    } else if (operator == "Divide") { 
        result = divide(num1, num2);
    }

document.getElementById("answer").innerText = result;

displayResult();

};

window.addEventListener('load', function() {
    const form = document.getElementById("calculator");
    const button = document.getElementById("clear");
    form.addEventListener("submit", handleCalculation);
    button.addEventListener("click", clearForm);
});
