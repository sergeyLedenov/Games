    document.getElementById('check-button-js').addEventListener('click', function () {
        const birthYear = parseInt(document.getElementById('year4-js').value);
        const resultElement = document.querySelector('.result-year4');
        if (birthYear >= 1900 && birthYear <= 2023) {
            const isLeapYear = (birthYear % 4 === 0);
            const resultElement = document.querySelector('.result-year4');
            if (isLeapYear) {
                resultElement.textContent = 'Ваш рік народження є високосним.';
                resultElement.style.color = 'green'
            } else {
                resultElement.textContent = 'Ваш рік народження не є високосним.';
                resultElement.style.color = 'red'
            }
        } else {
            resultElement.textContent = 'Введіть рік в діапазоні від 1900 до 2023';;
            resultElement.style.color = 'red'
        }
    });