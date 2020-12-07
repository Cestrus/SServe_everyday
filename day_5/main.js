import { toUpperCase, sortFriendsByName } from './src/task1.js';
import { findFreeChairs } from './src/task2.js';


const friendsListMock = [{name: 'Fred', surname: 'Corwill'}, {name: 'Wilfred', surname: 'Corwill'}, {name: 'Barney', surname: 'Tornbull'},
	{name: 'Betty', surname: 'Tornbull'}, {name: 'Bjon', surname: 'Tornbull'}, {name: 'Raphael', surname: 'Corwill'},
	{name: 'Alfred', surname: 'Corwill'},];

const chairsInRoomMock = [{visitors:5, chairs: 6}, {visitors:6, chairs: 6}, {visitors:3, chairs: 6}, {visitors:3, chairs: 7}, {visitors:4, chairs: 6}, {visitors: 3, chairs: 10}, {visitors: 0, chairs: Infinity}, ]


console.log('task 1: ', toUpperCase(friendsListMock));
console.log('task 1: ', sortFriendsByName(friendsListMock));

console.log('task 2: ', (findFreeChairs(chairsInRoomMock)));
