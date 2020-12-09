
export const decodeText = (text) => {
  const arrString = mySplitText(text);
  const keys = [];

  // TODO
  for (let i = 0; i < arrString.length; i++){
    if (i === 0 || i === keys.length )
    keys = extractKeys(arrString[i]) 
  }
  return arr;
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
    const word = '';

    for (let j = 0; j < arrLetter.length; j++){      
      for (let k = 0; k < forbSign.length; k++){
        if (arrLetter[j] !== forbSign[k]) word += arrLetter[j];
      }
    }
    wordsNotSing.push(word);
  } 
  return wordsNotSign;
}

