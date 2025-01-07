document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tButt').addEventListener('click', function () {
        let yourt = parseInt(document.getElementById('tInp').value);
        const resultt = document.querySelector('.tP');
        let days = Math.floor(yourt / (24 * 60));
        yourt %= 24 * 60;
        let hours = Math.floor(yourt / 60);
        yourt %= 60;
        let resultString = '';
        if (days > 0) resultString += `Дні: ${days},`;
        if (hours > 0) resultString += ` Години: ${hours},`;
        if (yourt > 0) resultString += ` Хвилини: ${yourt} `  ;
        resultt.textContent = resultString;
    });
});