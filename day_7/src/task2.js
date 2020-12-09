
export const decodeText = (text) => {
  const arrString = mySplitText(text);
  let keys = [];
  let decText = '';

  for (let i = 0, j = 0; i < arrString.length; i++){
    if (i === 0 || i === keys.length + 1){
      keys.length = 0;
      j = 0;
      keys = extractKeys(arrString[i]);
    } else {
      let arrWords = arrString[i].split(' ');
      decText += (deleteSign(arrWords[keys[j]]) + ' ');
      j++;
    }    
  }
  return firstLetterAndDota(decText.trim());
}

const mySplitText = (text) => {
  const arr = [];
  let str = '';

  for (let i = 0; i < text.length; i++){
    if (text[i] !== '.' && text[i] !== '!' && text[i] !== '?') {
      str += text[i];
    } else {
      arr.push(str);
      str = '';
    }
  }
  return arr;
}

const extractKeys = (string) => {
  let keys = [];
  const arrWords = string.split(' ');

  for (let i = 0; i < arrWords.length; i++){
    let word = deleteSign(arrWords[i]);
    keys.push(word.length)
  }
  return keys;
}

const deleteSign = (word) => {
  const arrLetter = [...word];
  const forbSign = ".,\"`!?;:'";
  let wordNotSign = '';

  for (let i = 0; i < arrLetter.length; i++){      
    for (let j = 0; j < forbSign.length; j++){
      if (arrLetter[i] === forbSign[j]) break;
      else if (j === forbSign.length - 1) wordNotSign += arrLetter[i];
    }
  }
  return wordNotSign;
}

const firstLetterAndDota = (string) => {
  const arr = [...string];
  arr[0] = arr[0].toUpperCase();
  arr[arr.length] = '.';
  return arr.join('');
}