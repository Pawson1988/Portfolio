function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  function shuffleNumbers() {
    for (let i = 0; i < bingoNums.length; i++) {
      numbersArray.push(parseInt(bingoNums[i].textContent));
      shuffle(numbersArray);
    }
  }