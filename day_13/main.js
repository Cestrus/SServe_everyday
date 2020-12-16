document.addEventListener('DOMContentLoaded', () => {  
  addListeners();
  renderTime(DOM.lastVisit);
  localStorage.setItem(Date.now(), new Date());
});

const DOM = {
  screen: document.querySelector('.screen'),
  spinList: document.querySelectorAll('.chooseSpiner'),
  lastVisit: document.querySelector('.lastVisit'),
}

let interval = null;

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
    spiner(p, arrStr[i])
  }    
}

function spiner(el, str){  
  let i = 0;
  if(el === document){
    return setInterval(() => {
      document.title = str[i];
      i = (i + 1) % str.length;
    }, 200)
  } else return setInterval(() => {
    el.innerText = str[i];
    i = (i + 1) % str.length;
  }, 200)
}

function addListeners(){
  DOM.spinList.forEach(el => {
    el.addEventListener('click', ev => chooseSpin(ev))
  })
}

function chooseSpin(ev){
  let num = ev.target.innerText;
  clearInterval(interval);
  interval = spiner(document, arrStr[num - 1]);  
}

function getStorage(){
  let length = localStorage.length;
  let key = (length)? localStorage.key(length - 1) : null;
  console.log(key);
  return (key)? localStorage.getItem(key) : 0;
}

function renderTime(lastVisit){
  let firstData = getStorage();
  let now = Date.now();


  lastVisit.innerText = firstData;
}

createSpinerScreen(arrStr)

