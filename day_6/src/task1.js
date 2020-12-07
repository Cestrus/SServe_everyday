
export const countIP = (ipStart, ipFinish) => {
  const arrIP = [[...ipStart.split('.')], [...ipFinish.split('.')]] ;
  // arrIP.sort();

  let sum = 0;

  for (let i = 0; i < 4; i++){
    // if (!isValidIP(arrIP[i])) {
    //   console.log('invalid IP');
    //   break;
    // }
    sum += (arrIP[0][i] > arrIP[1][i])? arrIP[0][i] - arrIP[1][i] : arrIP[1][i] - arrIP[0][i];


  }
  

  
  console.log(sum);
}



const isValidIP = (ip) => {
  for (let i = 0; i < ip.length; i++){
    if (ip[i] < 0 || ip[i] > 255) return false;
  }
  return true;
}