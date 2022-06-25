
function checkNumberCalled() {
  if (index > 89) {
    return (winningText.textContent = "No More Numbers Left To Call!");
  } else if (cardArrays[0].length > 0) {

    bingoNums[numbersArray[index] - 1].style.backgroundColor = "blue";
    bingoNums[numbersArray[index] - 1].style.color = "white";
    numbersCalled.push(parseInt(numbersArray[index]));

    for(let i = 0; i < 18; i++){
      checkLine(rows[i + 1], line[i], checkArrays[i], "orange");
      checkFullLine(checkArrays[i], "pink", i);
    }

    let checkedArrays = [
      (checkedArrayFullHouse1 = [
        ...checkArrays[0],
        ...checkArrays[1],
        ...checkArrays[2],
      ]),
      (checkedArrayFullHouse2 = [
        ...checkArrays[3],
        ...checkArrays[4],
        ...checkArrays[5],
      ]),
      (checkedArrayFullHouse3 = [
        ...checkArrays[6],
        ...checkArrays[7],
        ...checkArrays[8],
      ]),
      (checkedArrayFullHouse4 = [
        ...checkArrays[9],
        ...checkArrays[10],
        ...checkArrays[11],
      ]),
      (checkedArrayFullHouse5 = [
        ...checkArrays[12],
        ...checkArrays[13],
        ...checkArrays[14],
      ]),
      (checkedArrayFullHouse6 = [
        ...checkArrays[15],
        ...checkArrays[16],
        ...checkArrays[17],
      ]),
    ];

    for (let i = 0; i < checkedArrays.length; i++){
        if (checkedArrays[i].length === 15) {
        fullHouse = true;
        cards[i].style.backgroundColor = "blue";
        winningText.innerHTML =
          "FULL HOUSE" + " You won on " + numbersCalled.length + " numbers!" + "<br>" +
          " You won on card " + (i + 1);
      }
    }
      
    numCalled.textContent = numbersArray[index];
    numCounter.textContent = `${index + 1}`;
    index++;
  }
}

function checkLine(rowArray, Row, checkedArray, color) {
  for (let i = 0; i < numbersCalled.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (numbersCalled[i] === rowArray[j]) {
        Row[j].style.backgroundColor = color;
        for (let k = 0; k < numbersCalled.length; k++) {
          if (!checkedArray.includes(numbersCalled[i])) {
            checkedArray.push(numbersCalled[i]);
          }
        }
      }
    }
  }
}

function checkFullLine(checkedArray, color, index) {
  if (checkedArray.length === 5) {
      lineParent1[index].style.backgroundColor = color;
  }
}
