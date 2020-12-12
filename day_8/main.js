import { decodeText } from './src/task1.js';
import { damagedOrSunk } from './src/task2.js';


const text = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

const board = [[0,0,0,2,2,0],
               [0,3,0,0,0,0],
               [0,3,0,1,0,0],
               [0,3,0,1,0,0]];

const attacks = [[2, 1], [1, 3], [4, 2]];


console.log( 'task 1 => ', decodeText( text ));
console.log( 'task 2 => ', damagedOrSunk(board, attacks));