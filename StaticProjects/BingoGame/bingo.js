// ----------------------------- DOM Nodes/Elements ---------------------------------------------------

let lineParent1 = document.querySelectorAll(".line");
const numberContainer = document.querySelector(".numberContainer");
const callNumberBtn = document.querySelector(".callNumber");
const body = document.querySelector("body");
const winningText = document.querySelector(".winningText");
const numCounter = document.querySelector(".numCounter");
const changeCardNumsBtn = document.querySelector(".refreshNums");
const resetGameBtn = document.querySelector(".resetGame");
const numCalled = document.querySelector(".numCalled");
const autoCallBtn = document.querySelector(".autoCall");
const stopAutoCallBtn = document.querySelector(".stopAutoCall");

// ------------------------ Variables ------------------------------------------------------------------

let bingoNUms;
let line = [];

let rows = [];
for (let i = 0; i <= 18; i++) {
  rows.push([]);
}

let cardArrays = [];
let numbersCalled = [];
let numbersArray = [];
let index = 0;

let checkArrays = [];
for (let i = 0; i < 18; i++) {
  checkArrays.push([]);
}

let checkFullHouse = [];
let callAutoNumId;
let autoCallActive = false;
let fullHouse = false;

createNumberCard();
createBingoCards();
shuffleNumbers();

// ---------------------------- Event Listeners for buttons ----------------------------------------------

autoCallBtn.addEventListener("click", () => {
  if (
    autoCallActive === false &&
    fullHouse === false &&
    cardArrays.length > 0
  ) {
    autoCallActive = true;
    callAutoNumId = setInterval(() => {
      checkNumberCalled();
      if (fullHouse === true) {
        clearInterval(callAutoNumId);
      }
    }, 500);
  }
});

stopAutoCallBtn.addEventListener("click", () => {
  if (cardArrays.length > 0) {
    autoCallActive = false;
    return clearInterval(callAutoNumId);
  }
});

callNumberBtn.addEventListener("click", () => {
  if (fullHouse === false && autoCallActive === false) {
    if (cardArrays.length > 0) {
      checkNumberCalled();
    }
    return;
  }
});

changeCardNumsBtn.addEventListener("click", () => {
  if (numbersCalled.length === 0) {
    cardArrays.length = 0;
    for (let i = 0; i < 6; i++) {
      cardArrays.push(genCard());
    }
    changeCardNums();
  }
});
