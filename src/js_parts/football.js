
const cort = document.querySelector(".wrap-cort")

const ball = document.querySelector(".ball")


let ballRotate = 0;

let previousX = 0;

cort.addEventListener("click", ballMove)

function ballMove(a) {
    if (a.offsetX > previousX) {
        ballRotate += 45;
    } else {
        ballRotate -= 45;
    }
    previousX = a.offsetX;
    ball.style.rotate = `${ballRotate}deg`;

    if (a.offsetY > 170) {
        ball.style.top = `170px`;
    } else {
        ball.style.top = `${a.offsetY}px`;
    }

    if (a.offsetX > 670) {
        ball.style.left = `670px`;
    } else {
        ball.style.left = `${a.offsetX}px`;
    }
}







