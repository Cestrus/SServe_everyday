import { checkDesk } from './src/task1.js';
import { decodeText } from './src/task2.js';

const arrMock_1 = [[0, 0, 1], [0, 1, 2], [2, 1, 0]];
const arrMock_2 = [[0, 1, 1], [0, 1, 2], [2, 1, 0]];
const arrMock_3 = [[2, 1, 1], [0, 2, 2], [0, 1, 2]];

const text = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

// console.log('task 1 => ', checkDesk(arrMock_1));
// console.log('task 1 => ', checkDesk(arrMock_2));
// console.log('task 1 => ', checkDesk(arrMock_3));

console.log( 'task 2 => ', decodeText( text ));



