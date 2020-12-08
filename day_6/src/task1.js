
export const countIP = (ipStart, ipFinish) => {
  const arrIP = [[...ipStart.split('.')], [...ipFinish.split('.')]] ;
  arrIP.sort();

  let buffer = new ArrayBuffer(4);
  let arrBits = new Uint8Array(buffer);
  let strBits = '';
  
  for (let i = 0; i < 4; i++){
    arrBits[i] = Number(arrIP[1][i]);
    arrBits[i] = arrBits[i] - Number(arrIP[0][i]);
  }
  
  for (let i = 0; i < arrBits.length; i++){
    let num = arrBits[i];
    strBits += num.toString(2);
  }

  
  console.log(arrBits);
  console.log(strBits, +strBits.toString(2));

  return strBits.toString(10)
}



const isValidIP = (ip) => {
  for (let i = 0; i < ip.length; i++){
    if (ip[i] < 0 || ip[i] > 255) return false;
  }
  return true;
}