
import scientists  from "./scients-profiles"

// ==========cards=============

const listItems = document.querySelectorAll('.ul-scien .li-scien')
const wrapItem = document.querySelector(".ul-scien")


listItems.forEach((item, index) => {
  const itemName = item.querySelector('.item-name')
  const itemYear = item.querySelector('.item-year')

  itemName.textContent = `${scientists[index].name} ${scientists[index].surname}`
  itemYear.textContent = `${scientists[index].born} - ${scientists[index].dead}`
})

// ==========buttons===========

const button19 = document.querySelector(".ask-19")
const buttonAlphabet = document.querySelector(".alphabet")
const buttonLiveYears = document.querySelector(".liveYears")
const buttonLastBorn = document.querySelector(".later")
const buttonYearAlbert = document.querySelector(".yearAlbert")
const buttonStartC = document.querySelector(".start-c")
const buttonDeleteA = document.querySelector(".delete-a")
const buttonOppositeLive = document.querySelector(".oppositeLive")
const buttonFirstLetters = document.querySelector(".firstLetters")

// ===========functions============

// -----------button19-----------
button19.addEventListener("click", actButton19)

function actButton19() {
  wrapItem.innerHTML = ""
  const array = []

  scientists.forEach((scienti) => {
    if (scienti.born > 1800) {
          array.push(scienti)
        }
  })
  for (let i = 0; i < array.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }
  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${array[index].name} ${array[index].surname}`
    itemYear.textContent = `${array[index].born} - ${array[index].dead}`
  })
}

// -----------Alphabet-----------

buttonAlphabet.addEventListener("click", actButtonAlphabet)

function actButtonAlphabet() {
  wrapItem.innerHTML = ""
  scientists.sort((firstScien, secondScien) =>
  firstScien.name.localeCompare(secondScien.name))

  for (let i = 0; i < scientists.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }

  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${scientists[index].name} ${scientists[index].surname}`
    itemYear.textContent = `${scientists[index].born} - ${scientists[index].dead}`
  })

}

// -----------LiveYears-----------

buttonLiveYears.addEventListener("click", actButtonLiveYears)

function actButtonLiveYears() {
  wrapItem.innerHTML = ""
  const newScientists = scientists
  newScientists.sort((firstScien, secondScien) => 
  (secondScien.dead - secondScien.born) - (firstScien.dead - firstScien.born))


  for (let i = 0; i < newScientists.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }

  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${newScientists[index].name} ${newScientists[index].surname}`
    itemYear.textContent = `${newScientists[index].born} - ${newScientists[index].dead}`
  })

}

// -----------LastBorn-----------

buttonLastBorn.addEventListener("click", actButtonLastBorn)

function actButtonLastBorn() {
  wrapItem.innerHTML = ""


  let maxNumber = scientists[0].born
  for (let i = 0; i < scientists.length; i+=1) {
    if (maxNumber < scientists[i].born) {
      maxNumber = scientists[i]
    }
  }

  const createItem = document.createElement("li")
  createItem.classList.add("li-scien")
  createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
  wrapItem.append(createItem)

  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${maxNumber.name} ${maxNumber.surname}`
    itemYear.textContent = `${maxNumber.born} - ${maxNumber.dead}`
  })

}

// -----------YearAlbert-----------

buttonYearAlbert.addEventListener("click", actbuttonYearAlbert)

function actbuttonYearAlbert() {
  wrapItem.innerHTML = ""

  const findAlbert = scientists.find(s => s.name === "Albert")

  const createItem = document.createElement("li")
  createItem.classList.add("li-scien")
  createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
  wrapItem.append(createItem)

  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${findAlbert.name} ${findAlbert.surname}`
    itemYear.textContent = `${findAlbert.born} - ${findAlbert.dead}`
  })

}

// -----------StartC-----------

buttonStartC.addEventListener("click", actButtonStartC)

function actButtonStartC() {
  wrapItem.innerHTML = ""
  
  const startC = scientists.filter(scien => scien.surname.startsWith("C") === true)

  for (let i = 0; i < startC.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }
  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${startC[index].name} ${startC[index].surname}`
    itemYear.textContent = `${startC[index].born} - ${startC[index].dead}`
  })
}

// -----------DeleteNameA-----------

buttonDeleteA.addEventListener("click", actButtonDeleteA)

function actButtonDeleteA() {
  wrapItem.innerHTML = ""

  const without = scientists.filter(scien => scien.name.startsWith("A") !== true)

  for (let i = 0; i < without.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }
  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${without[index].name} ${without[index].surname}`
    itemYear.textContent = `${without[index].born} - ${without[index].dead}`
  })
}

// -----------OppositeLive-----------

buttonOppositeLive.addEventListener("click", actOppositeLive)

function actOppositeLive() {
  wrapItem.innerHTML = ""
  const oppositeArray = []

  let scienMax = {}
  let maxNumber = 0
  for (let i = 0; i < scientists.length; i+=1) {
    if (maxNumber < scientists[i].dead - scientists[i].born) {
      maxNumber = scientists[i].dead - scientists[i].born
      scienMax = scientists[i]
    }
  }

  let scienMin = {}
  let minNumber = 300
  for (let i = 0; i < scientists.length; i+=1) {
    if (minNumber > scientists[i].dead - scientists[i].born) {
      minNumber = scientists[i].dead - scientists[i].born
      scienMin = scientists[i]
    }
  }


  oppositeArray.push(scienMax, scienMin)
  
  for (let i = 0; i < oppositeArray.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }
  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${oppositeArray[index].name} ${oppositeArray[index].surname}`
    itemYear.textContent = `${oppositeArray[index].born} - ${oppositeArray[index].dead}`
  })
}

// -----------FirstLetters-----------

buttonFirstLetters.addEventListener("click", actButtonFirstLetters)

function actButtonFirstLetters() {
  wrapItem.innerHTML = ""

  const sameLetters = []
  for (let i = 0; i < scientists.length; i+=1) {
    if (scientists[i].name[0] === scientists[i].surname[0]) {
      sameLetters.push(scientists[i])
    }
  }

  for (let i = 0; i < sameLetters.length; i+=1) {
    const createItem = document.createElement("li")
    createItem.classList.add("li-scien")
    createItem.innerHTML = `<div><p class="item-name"></p><p class="item-year"></p></div>`
    wrapItem.append(createItem)
  }
  const newEl = document.querySelectorAll(".li-scien")
  newEl.forEach((item, index) => {
    const itemName = item.querySelector('.item-name')
    const itemYear = item.querySelector('.item-year')

    itemName.textContent = `${sameLetters[index].name} ${sameLetters[index].surname}`
    itemYear.textContent = `${sameLetters[index].born} - ${sameLetters[index].dead}`
  })






}













