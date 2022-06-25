const cards = document.querySelectorAll(".card");


function createBingoCards() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      let tr = document.createElement("tr");
      tr.setAttribute("class", "line");
      cards[i].append(tr);
      for (let k = 0; k < 9; k++) {
        let td = document.createElement("td");
        tr.append(td);
      }
    }
  }
  lineParent1 = document.querySelectorAll(".line");
  const lineParent = Array.from(lineParent1)
  for(let i = 0; i < 18; i++){
      line.push(lineParent[i].querySelectorAll(":scope > td"));
  }
}
