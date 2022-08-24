const expressOut = document.querySelector("#expression-out");
const numberOut = document.querySelector("#number-out");
const numBtns = [...document.querySelectorAll(".num-btn")];

function add(numA, numB) {
    return numA + numB;
}

function subtract(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    return numA / numB;
}

function operate(operator, numA, numB) {
    return operator(numA, numB);
}

function popDisplay(e) {
    numberOut.textContent += e.target.textContent;
}

numBtns.forEach((btn) => btn.addEventListener("click", popDisplay));