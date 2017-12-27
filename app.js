const fs = require('fs'); // fs is a built-in module
const _ = require('lodash');
const yargs = require('yargs');

/** 👇👇👇
 * requires the 'notes.js' file in the same folder
 * this allows me to use whatever is inside notes.js on this file!
 */
const notes = require('./notes.js');

const titleOptions = {
	describe: 'title of note', // a string that tells what's supposed to pass in for the title
	demand: true, // tells yargs whether this argument is required. it makes 'title' mandatory!
	alias: 't' // a shortcut (--title or just -t)
};

const bodyOptions = {
	describe: 'body of the note', 
	demand: true,
	alias: 'b'
};

/**
 * '.command' takes 3 arguments: 1 - the name; exactly what the user will type in the command.
 * 2 - a description of what the command does. 3 - an options object that specifies what 
 * arguments this command requires!
 * .help sets up yargs to return some useful information when someone runs the program (eg: node app.js --help)
 * 
 */
const argv = yargs
	.command('add', 'add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'list all notes')
	.command('read', 'read a note', {
		title: titleOptions
	})
	.command('remove', 'remove a note', {
		title: titleOptions
	})
	.help()
	.argv;

const command = argv._[0]; // refer to yargs.js

if (command === 'add') {
	/* joga o resultado dentro da variável 'notes' pra depois verificar
	se ela existe ou não no if/else */
	const note = notes.addNotes(argv.title, argv.body); // refer to yargs.js
	if (note) {
		console.log('note created');
		notes.logNote(note); // mostra a note no console
	} else {
		// if note == undefined
		console.log('note title taken');
	}
} else if (command === 'list') {
	const allNotes = notes.getAll();
	console.log(`printing ${allNotes.length} note(s)...`);
	allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
	const note = notes.getNote(argv.title); // joga resultado numa variável pra ser true/false
	if (note) {
		console.log('⭐  note found ⭐');
		notes.logNote(note); // mostra note no console
	} else console.log('⛔  note not found ⛔');
} else if (command === 'remove') {
	const noteRemoved = notes.removeNote(argv.title);
	const message = noteRemoved ? 'note was removed' : 'note not found';
	console.log(message);
} else console.log('command not recognized');
