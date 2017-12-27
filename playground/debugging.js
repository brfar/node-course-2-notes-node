const person = {
	name: 'andrew',
};

person.age = 25;

person.name = 'bruno';

console.log(person);

/* > node --inspect-brk playground/debugging.js
On Chrome: chrome://inspect > 'Open dedicated DevTools for Node'
*/