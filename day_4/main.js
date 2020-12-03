import { unshift } from './src/task1.js';
import {  } from './src/task2.js';


const arrMock_1 = ['a', 'b', 'c', 'd'];
const arrMock_2 = [0, 1, 2, 3, 4, 5];


console.log(unshift(arrMock_1, 1, 2, 3, 4));
console.log(unshift(arrMock_1, ...arrMock_2));