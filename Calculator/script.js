let result = document.getElementById('result');
let buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === '=' || value === 'C') {
            if (value === '=') {
                calculate();
            } else {
                clear();
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            num1 = result.value;
            result.value = '';
        } else {
            result.value += value;
        }
    });
});

function calculate() {
    num2 = result.value;
    let resultValue = 0;

    switch (operator) {
        case '+':
            resultValue = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            resultValue = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            resultValue = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            resultValue = parseFloat(num1) / parseFloat(num2);
            break;
    }

    result.value = resultValue;
}

function clear() {
    result.value = '';
    num1 = '';
    num2 = '';
    operator = '';
}