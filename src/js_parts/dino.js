const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const game = document.querySelector(".Gdino");
let isBtnPres = true;

game.addEventListener("click", ()=> {
    startGame()
    jump();
    isBtnPres = false
})


function startGame () {
    cactus.classList.add("cactusMove");
    dino.classList.add("dinoRun");
}

function endGame () {
    cactus.classList.remove("cactusMove");
    dino.classList.remove("dinoRun");
    dino.classList.add("dinoDead")
}

function jump () {
    if (isBtnPres) {
        if (dino.classList != "jump") {
            dino.classList.add("jump")
        }
        isBtnPres = false
        
        setTimeout (()=> {
            isBtnPres = true
            dino.classList.remove("jump")
        }, 500)
    }
}

let isAlive = setInterval (()=> {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusleft < 40 && cactusleft > 0 && dinoTop >= 90) {
        endGame()
        dino.classList.add("dinoDead")
    }
})
