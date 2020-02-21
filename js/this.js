
function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}

function clearDisplayValue() {
    document.getElementById("display").value = "";
}