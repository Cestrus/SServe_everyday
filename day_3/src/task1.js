
export const concat = (str1, str2) => {
    const str = str1.split('');

    for(let i = 0; i < str2.length; i++){
      str.push(str2[i]);      
    }
    return str.join('');
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
    str.push(string);
  }
  return str.join('');
}


export const  substr = (string, start = 0, length = string.length) => {
  const str = string.split('');
  const substr = [];

  start = (start < 0) ? string.length - start : start;
  length = (length > string.length - start) ? string.length - start : length;

  for (let i = start; i < start + length; i++){
    substr.push(str[i]);
  }
  return substr.join('');
}

export const  substring = (string, start = 0, end = string.length) => {
  const str = string.split('');
  const substr = [];

  start = (start < 0) ? string.length - start : start;
  length = (length > string.length - start) ? string.length - start : length;

  for (let i = start; i < end; i++){
    substr.push(str[i]);
  }
  return substr.join('');
}





