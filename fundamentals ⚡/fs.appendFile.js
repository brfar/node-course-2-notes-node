const fs = require('fs'); // 'fs' is a built-in module
const os = require('os'); // another built-in module
const notes = require('./notes'); // requires the 'notes.js' file in the same folder

/**
 * appendFile cria o arquivo passado no primeiro argumento (caso já não exista)
 * e joga neste arquivo o texto passado no segundo argumento!
 * a função no último argumento é caso um erro ocorra
 */
fs.appendFile('greetings.txt', 'hello world', err => {
	if (err) console.log('unable to write to file');
});

/**
 * A chamada acima é igual a:
 * fs.appendFileSync('greetings.txt', 'hello world');
 */

var user = os.userInfo(); // userInfo() é um método de "os"
console.log(user);
/* 👇 user imprime
	{ uid: -1,
  gid: -1,
  username: 'brobs', // <<<<
  homedir: 'C:\\Users\\brobs',
  shell: null }
	*/

fs.appendFile('greetings.txt', `hello ${user.username}`, err => { // cria 'hello brobs'
	if (err) console.log('unable to write to file');
});
