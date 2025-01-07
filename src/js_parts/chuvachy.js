let choice = "";
const stone = document.querySelector("#stone");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
let pcN = 1;
let pcChoice
const result = document.querySelector(".result")
const pcScore = document.querySelector(".pcScore")
const userScore = document.querySelector(".userScore")
let userScoreNum = 0
let pcScoreNum = 0

stone.addEventListener("click", ()=> {
    stone.classList.add("box-cvc-js");
    scissors.classList.remove("box-cvc-js");
    paper.classList.remove("box-cvc-js");
    choice = "stone";
})

scissors.addEventListener("click", ()=> {
    stone.classList.remove("box-cvc-js");
    scissors.classList.add("box-cvc-js");
    paper.classList.remove("box-cvc-js");
    choice = "scissors";
})

paper.addEventListener("click", ()=> {
    stone.classList.remove("box-cvc-js");
    scissors.classList.remove("box-cvc-js");
    paper.classList.add("box-cvc-js");
    choice = "paper";
})

function Play() {
    pcN = Math.floor(Math.random() * (4 - 1) + 1);
    if (pcN == 1) {
        pcChoice = "stone";
    }
    if (pcN == 2) {
        pcChoice = "scissors";
    }
    if (pcN == 3) {
        pcChoice = "paper";
    }

    if (pcChoice == choice) {
        result.textContent = "Нічия"
    }

    if (choice == "") {
        result.textContent = "Результат";
    }

    if (choice == "scissors" && pcChoice == "stone") {
        result.textContent = "Поразка, комп'ютер обрав камінь";
        pcScoreNum++;
        pcScore.textContent = pcScoreNum;
    } else if (choice == "scissors" && pcChoice == "paper") {
        result.textContent = "Перемога, комп'ютер обрав папір";
        userScoreNum++;
        userScore.textContent = userScoreNum;
    }

    if (choice == "stone" && pcChoice == "paper") {
        result.textContent = "Поразка, комп'ютер обрав папір";
        pcScoreNum++
        pcScore.textContent = pcScoreNum;
    } else if (choice == "stone" && pcChoice == "scissors") {
        result.textContent = "Перемога, комп'ютер обрав ножиці";
        userScoreNum++;
        userScore.textContent = userScoreNum;
    }

    if (choice == "paper" && pcChoice == "scissors") {
        result.textContent = "Поразка, комп'ютер обрав ножиці";
        pcScoreNum++;
        pcScore.textContent = pcScoreNum;
    } else if (choice == "paper" && pcChoice == "stone") {
        result.textContent = "Перемога, комп'ютер обрав камінь";
        userScoreNum++;
        userScore.textContent = userScoreNum;
    }
}
function Restart() {
    userScoreNum = 0;
    pcScoreNum = 0;
    userScore.textContent = userScoreNum;
    pcScore.textContent = pcScoreNum;
    pcN = 1;
    pcChoice = "";
    choice = "";
    stone.classList.remove("box-cvc-js");
    scissors.classList.remove("box-cvc-js");
    paper.classList.remove("box-cvc-js");
    result.textContent = "Результат";
}

document.getElementById("restart").addEventListener("click", Restart);
document.getElementById("play").addEventListener("click", Play);