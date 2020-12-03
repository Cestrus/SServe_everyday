
const arrayMock = ['Apple', 'Banana', 'Pineapple'];

export const myMap = arrayMock.reduce((prev, curr) => {
  return prev.concat(curr[0]);
}, []);


export const myFilter = arrayMock.reduce((prev, curr) => {
  return (curr[0].toLowerCase() === 'a')? prev.concat(curr) : prev; 
}, []);


export const myForEach = arrayMock.reduce((prev, curr, index)=>{
  return prev.concat(`${index + 1}: ${curr};`)
}, []);
