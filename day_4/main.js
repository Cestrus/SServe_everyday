import { pop, push, shift, unshift, concat } from './src/task1.js';
import { myMap, myFilter, myForEach } from './src/task2.js';


const arrMock_1 = ['a', 'b', 'c', 'd'];
const arrMock_2 = [0, 1, 2, 3, 4, 5];


console.log(unshift(arrMock_1, 1, 2, 3, 4));
console.log(unshift(arrMock_1, ...arrMock_2));

console.log('myMap: ', myMap);
console.log('myFilter: ', myFilter);
console.log('myForEach: ', myForEach);