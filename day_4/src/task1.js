
export const pop = (arr) => {
  if (!arr.length) return undefined;
  const el = arr[arr.length-1];
  arr.length --;
  return el;
}


export const push = (arr, ...rest) => {
  const length = (Number.isNaN(arr.length))? 0 : arr.length;
  for (let i = 0; i < rest.length; i++){
    arr[length + i] = rest[i];
  }  
  return arr;
}


export const shift = (arr) => {
  if (!arr.length) return undefined;
  const el = arr[0];
  for (let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i+1];
  }
  arr.length--;
  return el;
}


export const unshift = (arr, ...rest) => {
  const newArr = new Array(arr.length + rest.length);
  for(let i = 0; i < newArr.length; i++){
    if (i < rest.length){
      newArr[i] = rest[i];
    } else {
      newArr[i] = arr[i - rest.length];
    }
  }
  arr = newArr;
  return arr.length;
}


export const concat = (arr, ...rest) => {
  const newArr = [];
  for (let i = 0; i < arr.length + rest.length; i++){
    if (i < arr.length){
      newArr[i] = arr[i];
    } else {
      newArr[i] = rest[i - arr.length];
    }
  }
  return newArr;
}