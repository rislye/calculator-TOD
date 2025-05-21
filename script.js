
let number = document.querySelectorAll('.btn');
const display = document.querySelector('.output');
let operators = document.querySelectorAll('.operator');
let equal = document.getElementById("equal");
let AC = document.querySelector('.AC');
let resultInput = document.querySelector('.result');
let delete1 = document.querySelector('.delete1');

let currentValue = '';
let secondValue = '';
let choiceOperator = '';
let result = '';


delete1.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
    currentValue = display.value;
})

number.forEach(button => {
    button.addEventListener('click', () => {
        if (button === '.') {
            if (currentValue.includes('.')) {
             return;
        }
        }
        
            display.value += button.innerText;
            currentValue = display.value
            console.log(currentValue)
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (secondValue && choiceOperator) {
            currentValue = display.value;
            operate();
            secondValue = display.value;
        } else {
            secondValue = display.value;
        }
        choiceOperator = operator.innerText;
        display.value = '';
    });
});

function operate() {
    let num1 = parseFloat(secondValue);
    let num2 = parseFloat(currentValue);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Invalid numbers');
        return;
    }

    switch (choiceOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'X':
            result = num1 * num2;
            break;
        case '%':
            if (num2 === 0) {
                alert('Cannot divide by 0');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Unknown operator');
            return;
    }

    display.value = Math.round(result * 100) / 100;
    currentValue = '';
    secondValue = Math.round(result * 100) / 100;
    resultInput.value = Math.round(result * 100) / 100;
}

equal.addEventListener('click', () => {
    operate()
    display.value = '';
})

AC.addEventListener('click', () => {
    clearALL();
})

function clearALL() {
    currentValue = '';
    secondValue = '';
    choiceOperator = '';
    result = '';
    display.value = '';
    resultInput.value = result;
}