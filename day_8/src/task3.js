
export const damagedOrSunk = (board, attacks) => {
  const battleBoard = [...board];
  const boats = initBoat(board);
  const prices = {
    'sunk': 1, 
    'damaged': 0.5,
    'notTouched': -1,
  }
  battle (battleBoard, attacks, boats);
  return scoring (boats, prices);
}

const battle = (...props) => {
  const [battleBoard, attacks, boats] = props;
  for (let i = 0; i < attacks.length; i++){
    let cell = battleBoard[battleBoard.length - attacks[i][1]][attacks[i][0] - 1];
    if(cell) {
      let boat = boats.find(boat => +boat.id === cell);      
      boat.health -- ;
      boat.isDamage = true;
      battleBoard[battleBoard.length - attacks[i][1]][attacks[i][0] - 1] = 0;
    }
  }
}

const initBoat = (board) => {
  const tempBoard = [...board.toString()].filter(el => el !== ',');
  return tempBoard.reduce((acc, curr) => {
    if(+curr){
      if(!acc.length) {
        acc.push({id: `${curr}`, health: 1, isDamage: false});
      } else {
        let boat = acc.find(el => el.id === curr);
        if(boat) boat.health ++; 
        else acc.push({id: `${curr}`, health: 1, isDamage: false});
      }
    }
    return acc;
  }, []);
}


const scoring = (boats, prices) => {
  const result = {
    sunk: 0,
    damaged: 0,
    notTouched: 0,
    points: 0,
  };
  boats.forEach(boat => { 
    if (boat.isDamage && boat.health !== 0) { 
      result.points += prices.damaged;
      result.damaged ++;
    }
    else if (boat.health === 0) {
      result.points += prices.sunk;
      result.sunk ++;
    }
    else {
      result.points += prices.notTouched;
      result.notTouched ++;
    }
  });
  return result;
}      