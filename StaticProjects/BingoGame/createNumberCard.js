


function createNumberCard() {
    for (let i = 0; i < 90; i++) {
      let numDiv = document.createElement("div");
      numDiv.setAttribute("class", "bingoNum");
      numDiv.textContent = i + 1;
      numberContainer.append(numDiv);
    }
    bingoNums = document.querySelectorAll(".bingoNum");
  }