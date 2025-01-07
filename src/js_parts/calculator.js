let operation = null;

function setOperation(op) {
    operation = op;
    document.getElementById('answer').innerText = 'Операція: ' + op;
}

function calculate() {
    const firstNumber = parseFloat(document.querySelector('.first_number').value);
    const secondNumber = parseFloat(document.querySelector('.second_number').value);

    document.getElementById('answer').innerText = '';

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('answer').innerText = 'Введіть коректні числа';
    } else {
        let result;
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber === 0) {
                    document.getElementById('answer').innerText = 'Помилка: Ділення на нуль';
                    return;
                }
                result = firstNumber / secondNumber;
                break;
            default:
                document.getElementById('answer').innerText = 'Оберіть операцію';
                return;
        }
        document.getElementById('answer').innerText = 'Результат: ' + result;
    }
}

document.getElementById('plus-js').addEventListener('click', function () {
    setOperation('+');
});

document.getElementById('min-js').addEventListener('click', function () {
    setOperation('-');
});

document.getElementById('mult-js').addEventListener('click', function () {
    setOperation('*');
});

document.getElementById('dil-js').addEventListener('click', function () {
    setOperation('/');
});

document.getElementById('equal-js').addEventListener('click', function () {
    calculate();
});
