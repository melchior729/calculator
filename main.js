const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ['x', '+', '/', '-'];

let inputs = [];

const output = document.querySelector('.output');

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case 'x':
            return multiply(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

function calculate() {
    const minInputs = 3;
    if (inputs.length < minInputs) {
        return;
    }

    let popped = inputs.pop();
    if (Array.isArray(popped)) {
        popped = popped.join('');
    }

    const secondNum = Number(popped);
    const operator = inputs.pop();
    const firstNum = Number(inputs.pop());

    let answer = Number(operate(firstNum, operator, secondNum).toFixed(2));
    if (answer % 1 === 0) {
        answer = Number.parseInt(answer);
    }
    inputs.splice(0);
    inputs.push([answer]);

    output.textContent = answer;
}

function buttonLogic(button) {
    const val = button.textContent;

    if (nums.includes(val)) {
        button.addEventListener("click", () => {
            if (inputs.length === 0 || operations.includes(inputs.at(-1))) {
                inputs.push([]);
            }
            inputs.at(-1).push(val);
            output.textContent = inputs.at(-1).join('');;
        });
    } else if (operations.includes(val)) {
        button.addEventListener("click", () => {
            if (inputs.length > 0) {
                inputs.push(inputs.pop().join(''));
                inputs.push(val);
                output.textContent = val;
            }
        });
    } else if (val === '=') button.addEventListener("click", calculate);
    else {
        button.addEventListener("click", () => {
            inputs.splice(0);
            output.textContent = '';
        });
    }
}

function assignButtons() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => buttonLogic(button));
}

assignButtons();
