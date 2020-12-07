import { toUpperCase, sortFriendsByName } from './src/task1.js';
import { findFreeChairs } from './src/task2.js';
import { findDotes } from './src/task3.js';


const friendsListMock = [{name: 'Fred', surname: 'Corwill'}, {name: 'Wilfred', surname: 'Corwill'}, {name: 'Barney', surname: 'Tornbull'},
	{name: 'Betty', surname: 'Tornbull'}, {name: 'Bjon', surname: 'Tornbull'}, {name: 'Raphael', surname: 'Corwill'},
	{name: 'Alfred', surname: 'Corwill'},];

const chairsInRoomMock = [{visitors:5, chairs: 6}, {visitors:6, chairs: 6}, {visitors:3, chairs: 6}, {visitors:3, chairs: 7}, {visitors:4, chairs: 6}, {visitors: 3, chairs: 10}, {visitors: 0, chairs: Infinity}, ]

const coordsDotesMock = [ [6,7], [7,4], [7,9], [2,2], [2,8], [5,5], [6,3], ]

// console.log('task 1: ', toUpperCase(friendsListMock));
// console.log('task 1: ', sortFriendsByName(friendsListMock));

// console.log('task 2: ', (findFreeChairs(chairsInRoomMock)));

console.log('task 3: ', findDotes(coordsDotesMock));
