const DOM = {
  screen: document.querySelector('.screen'),
  chsSpinList: document.querySelectorAll('.chooseSpiner'),
  lastVisit: document.querySelector('.lastVisit'),
}

const arrStr = [
  '|\\-/',
  '⡇⡏⡗⡧⣇⢸⣸⢼⢺⢹',
  '.oO◐◒◑◓Oo',
  '▙▟▜▛',
]


function createSpinerScreen(arrStr){
  for (let i = 0; i < arrStr.length; i++){
    let p = document.createElement('p');
    DOM.screen.appendChild(p);
    spiner(p, str[i])
  }    
}

function spiner(el, str){  
  let i = 0;
  setInterval(() => {
    el.innerText = str[i];
  i = (i + 1) % str.length;
  }, 200)
  
}