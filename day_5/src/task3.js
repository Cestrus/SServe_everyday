
export function findDotes(arrCoords){
  let arrDotes = [];
  arrCoords.sort();

  for (let i = 0; i < arrCoords.length; i++){
    for (let j = 1; j < arrCoords.length - i; j++){
      let deltaX = arrCoords[i][0] - arrCoords[i+j][0];
      let deltaY = arrCoords[i][1] - arrCoords[i+j][1];
      arrDotes.push([deltaX, deltaY, i])
    }
  }
  arrDotes.sort();
  console.log(arrDotes);
  return []
  
}

