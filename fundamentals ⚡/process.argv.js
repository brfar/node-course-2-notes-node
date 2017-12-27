// on the command line run: node <file.js> <whatever>

var command = process.argv[2];

/**
 * 'process' is a giant fucking object!
 * 'argv' is kind of an array of arguments
 * argv whatever we type after 'node file.js'
 * on this array the first 2 elements are 'useless'
 * that's why we get the third element by typing [2]
**/

console.log(`command: ${command}`);

// 👇 se o que eu digitar depois de 'node file.js' for 'add'...
if (command === 'add') 
  console.log('adding new note');