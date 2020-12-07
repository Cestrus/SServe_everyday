
export const findFreeChairs = (arrChairsInRoom, count) => {
  if (countChairs <= 0 || typeof(countChairs) !== 'number') return false;
  const arrChairs = [];

  for (let i = 0; i < arrChairsInRoom.length; i++){
    if (countChairs(arrChairs) >= countChairs) break;
    let freeChairs = arrChairsInRoom[i].visitors - arrChairsInRoom[i].chairs;
    if (freeChairs > 0) {
      if (count - countChairs(arrChairs) > freeChairs){
        arrChairs.push(freeChairs);
      } else {
        arrChairs.push(count - countChairs(arrChairs));
      }
    }
  }
  return arrChairs;
}

const countChairs = (arrChairs) => {
  return arrChairs.reduce((prev, curr) => {prev + curr}, 0);
}