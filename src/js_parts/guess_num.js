function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}

let secretNumber = generateRandomNumber();

document.getElementById('guess-button-js').addEventListener('click', function () {
    const playerGuess = document.getElementById('guess-js').value;
    const correct = document.getElementById('result-guess')
    if(playerGuess>= 0 && playerGuess <= 10)
        if (playerGuess === '') {
        correct.style.color = 'red'
        correct.textContent = `Введіть число!`;
        } else {
        if (Number(playerGuess) === secretNumber) {
            correct.textContent = `Вітаю, ви вгадали число!  ${secretNumber}.`;
            correct.style.color = 'green'
            secretNumber = generateRandomNumber();
        } else {
            correct.textContent = `Ви програли, комп’ютер загадав  ${secretNumber}.`;
            correct.style.color = 'red'
            secretNumber = generateRandomNumber();
        }
    } else{
        correct.textContent = 'Введіть рік в діапазоні від 0 до 10';;
        correct.style.color = 'red'
    }
});