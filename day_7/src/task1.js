
export const checkDesk = (desk) => {
  let winner = null;

  for (let i = 0; i < desk.length; i++){
    winner = checkRow (desk[i]);
    if (winner > 0) return winner;
    winner = (checkRow (createRowFromCol (desk, i)));
    if (winner > 0) return winner;
    winner = (checkRow (createRowFromDiag (desk, i)));
    if (winner > 0) return winner;
  }

  return (checkEmpty (desk))? -1 : 0;
}

const checkRow = (deskRow) => {
  let sumRow = deskRow.reduce((a, b) => a + b);
  let isEmpty = deskRow.some(el => el === 0);
  if (sumRow === 6) return 1; //'X won!';
  else if (sumRow === 3 && !isEmpty) return 2; //'O won!';
  return 0; 
}

const createRowFromCol = (desk, index) => {
  return [desk[0][index], desk[1][index], desk[2][index]];
}

const createRowFromDiag = (desk, topElem = 0) => {
  let botElem = (topElem === 0)? 2 : 0;
  return [desk[0][topElem], desk[1][1], desk[2][botElem]];
}

const checkEmpty = (desk) => {
  let str = desk.toString();
  for (let i = 0; i < str.length; i++){
    if (str[i] === '0') return true;
  }
  return false;
}