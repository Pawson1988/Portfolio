const numbers = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
];

function genCard() {
  let cardArray = [[], [], []];

  function take3(Arr) {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      newArr.push(Arr[i]);
    }
    return newArr;
  }

  function sort3(Arr) {
    Arr.sort((a, b) => a - b);
    return Arr;
  }

  function addToCard(Arr, column) {
    for (let i = 0; i < Arr.length; i++) {
      cardArray[i][column] = Arr[i];
    }
  }

  function deleteNums(Arr) {
    for (let i = 0; i < 3; i++) {
      let toDelete = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      toDelete = toDelete.splice(4);
      for (let j = 0; j < Arr.length + 1; j++) {
        Arr[i][toDelete[j]] = "";
      }
    }
    return Arr;
  }

  function finaliseCard(decade, column) {
    decade = shuffle(decade);
    decade = take3(decade);
    decade = sort3(decade);
    addToCard(decade, column);
  }

  for(let i = 0; i < 9; i++){
    finaliseCard(numbers[i], i);
  }

  cardArray = deleteNums(cardArray);

  return cardArray;
}
