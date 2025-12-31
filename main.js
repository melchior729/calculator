const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;

let inputs = [];

const output = document.querySelector('.output');

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
    return NaN;
}

function assignButtons() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        const val = button.textContent;
        button.addEventListener("click", () => {
            val === '=' ? calculate() : inputs.push(val);
        });
    });
}
