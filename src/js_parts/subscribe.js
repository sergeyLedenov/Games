
const btnSub = document.querySelector(".subscribe")
const modalW = document.querySelector(".wrap-modal")
const closeBtn = document.querySelector(".close-btn")

btnSub.addEventListener("click", subAct)
closeBtn.addEventListener("click", closeMod)

function subAct() {
    modalW.style.display = "block"
}

function closeMod() {
    modalW.style.display = "none"
}







