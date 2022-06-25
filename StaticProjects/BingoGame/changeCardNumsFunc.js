function changeCardNums() {
  for (let i = 0; i < 9; i++) {
    // ----------------------Card One ------------------------------

    line[0][i].textContent = cardArrays[0][0][i];
    line[1][i].textContent = cardArrays[0][1][i];
    line[2][i].textContent = cardArrays[0][2][i];

    rows[1][i] = cardArrays[0][0][i];
    rows[2][i] = cardArrays[0][1][i];
    rows[3][i] = cardArrays[0][2][i];

    // ----------------------- Card Two -----------------------------

    line[3][i].textContent = cardArrays[1][0][i];
    line[4][i].textContent = cardArrays[1][1][i];
    line[5][i].textContent = cardArrays[1][2][i];

    rows[4][i] = parseInt(line[3][i].textContent);
    rows[5][i] = parseInt(line[4][i].textContent);
    rows[6][i] = parseInt(line[5][i].textContent);

    // ----------------------- Card Three -----------------------------

    line[6][i].textContent = cardArrays[2][0][i];
    line[7][i].textContent = cardArrays[2][1][i];
    line[8][i].textContent = cardArrays[2][2][i];

    rows[7][i] = parseInt(line[6][i].textContent);
    rows[8][i] = parseInt(line[7][i].textContent);
    rows[9][i] = parseInt(line[8][i].textContent);

    // ----------------------- Card Four -----------------------------

    line[9][i].textContent = cardArrays[3][0][i];
    line[10][i].textContent = cardArrays[3][1][i];
    line[11][i].textContent = cardArrays[3][2][i];

    rows[10][i] = parseInt(line[9][i].textContent);
    rows[11][i] = parseInt(line[10][i].textContent);
    rows[12][i] = parseInt(line[11][i].textContent);

    // ----------------------- Card Five -----------------------------

    line[12][i].textContent = cardArrays[4][0][i];
    line[13][i].textContent = cardArrays[4][1][i];
    line[14][i].textContent = cardArrays[4][2][i];

    rows[13][i] = parseInt(line[12][i].textContent);
    rows[14][i] = parseInt(line[13][i].textContent);
    rows[15][i] = parseInt(line[14][i].textContent);

    // ----------------------- Card Six -----------------------------

    line[15][i].textContent = cardArrays[5][0][i];
    line[16][i].textContent = cardArrays[5][1][i];
    line[17][i].textContent = cardArrays[5][2][i];

    rows[16][i] = parseInt(line[15][i].textContent);
    rows[17][i] = parseInt(line[16][i].textContent);
    rows[18][i] = parseInt(line[17][i].textContent);
  }
}
