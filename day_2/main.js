import { howMuchOneInNumber } from './src/task1.js';
import { sortWords } from './src/task2.js';
import { manStillStanding } from './src/task3.js';

console.log('task 1 => ', howMuchOneInNumber('123456'));
console.log('task 1 => ', howMuchOneInNumber(- 123456));
console.log('task 1 => ', howMuchOneInNumber(123467));


console.log('task 2 => ', sortWords('is2      Thi1s T4est 3a'));
console.log('task 2 => ', sortWords('4of Fo1r pe6ople g3ood th5e the2'));
console.log('task 2 => ', sortWords(''));

console.log('task 3 => ', manStillStanding([]))
console.log('task 3 => ', manStillStanding(['A4Y', 'A4Y']))
console.log('task 3 => ', manStillStanding(['A4Y', 'A4R']))
console.log('task 3 => ', manStillStanding(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y']))
console.log('task 3 => ', manStillStanding(['A4R', 'A4R', 'A4R']))
console.log('task 3 => ', manStillStanding(['A4R', 'A6R', 'A8R', 'A10R', 'A11R']))



