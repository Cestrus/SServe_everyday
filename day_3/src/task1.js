
const mySplit = (string) => {
  const str = [];
    
    for (let i = 0; i < string.length; i++){
      str.push(string[i]);
    }
  return str;  
}

const myJoin = (arr) => {
  let string = '';
  for (let i = 0; i < arr.length; i++){
    str += arr[i];
  }
  return string;
}

export const concat = (str1, str2) => {
    const str = mySplit(str1);
    for (let i = 0; i < str2.length; i++){
      str.push(str2[i]);      
    }
    return myJoin(str);
}

export const lastIndexOf = (str, letter) => {
  let index = -1;

  for(let i = str.length - 1; i > 0; i--){
    if (str[i] === letter){
      index = i;
      break;
    }
  }
  return index;
}

export const includes = (str, substr) => {
  return str.match(substr) ? true : false;  
}

export const  repeat = (string, count) => {
  const str = [];

  for (let i = 0; i < count; i++){
    str.push(string[i]);
  }
  return myJoin(str);;
}


export const  substr = (string, start = 0, length = string.length) => {
  const str = mySplit(string);;
  const substr = [];

  start = (start < 0) ? string.length - start : start;
  length = (length > string.length - start) ? string.length - start : length;
  
  for (let i = start; i < start + length; i++){
    substr.push(str[i]);
  }
  return myJoin(substr);
}

export const  substring = (string, start = 0, end = string.length) => {
  const str = mySplit(string);
  const substr = [];

  start = (start < 0) ? string.length - start : start;
  length = (length > string.length - start) ? string.length - start : length;

  for (let i = start; i < end; i++){
    substr.push(str[i]);
  }
  return myJoin(substr);
}





