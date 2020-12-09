
export const decodeText = (text) => {
  const arrString = mySplitText(text);
  let keys = [];
  let decText = '';

  // 
  for (let i = 0, j = 0; i < arrString.length; i++){
    if (i === 0 || i === keys.length + 1){
      keys.length = 0;
      keys = extractKeys(arrString[i]);
      continue;
    } else {
      let arrWords = arrString[i].split(' ');
      decText += arrWords[keys[j]];
      j++;
    }    
  }
  return decText;
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
  const keys = [];
  const arrWords = deleteSign( string.split(' ') );

  for (let i = 0; i < arrWords.length; i++){
    keys.push(arrWords[i].length)
  }
  return keys;
}

const deleteSign = (arrWords) => {
  const forbSign = '.,\'"`!?;:';
  const wordsNotSign = [];

  for (let i = 0; i < arrWords.length; i++){
    let arrLetter = [...arrWords[i]];
    let word = '';

    for (let j = 0; j < arrLetter.length; j++){      
      for (let k = 0; k < forbSign.length; k++){
        if (arrLetter[j] !== forbSign[k]) word += arrLetter[j];
      }
    }
    wordsNotSign.push(word);
  } 
  return wordsNotSign;
}

