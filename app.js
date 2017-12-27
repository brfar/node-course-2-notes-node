const fs = require('fs'); // fs is a built-in module
const _ = require('lodash');
const yargs = require('yargs');

/** 👇👇👇
 * requires the 'notes.js' file in the same folder
 * this allows me to use whatever is inside notes.js on this file!
 */
const notes = require('./notes.js');

const titleOptions = {
	describe: 'title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'body of the note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'add a new note', {
		title: titleOptions,
		body: bodyOptions,
	})
	.command('list', 'list all notes')
	.command('read', 'read a note', {
		title: titleOptions,
	})
	.command('remove', 'remove a note', {
		title = titleOptions,
	})
	.help()
	.argv;
	
const command = argv._[0]; // refer to yargs.js

if (command === 'add') {
	const note = notes.addNotes(argv.title, argv.body); // refer to yargs.js
	if (note) {
		console.log('note created');
		notes.logNote(note);
	} else {
		console.log('note title taken');
	}
} else if (command === 'list') {
	const allNotes = notes.getAll();
	console.log(`printing ${allNotes.length} note(s)...`);
	allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
	const note = notes.getNote(argv.title);
	if (note) {
		console.log('⭐   note found ⭐');
		notes.logNote(note);
	} else {
		console.log('⛔    note not found ⛔');
	}
} else if (command === 'remove') {
	const noteRemoved = notes.removeNote(argv.title);
	const message = noteRemoved ? 'note was removed' : 'note not found';
	console.log(message);
} else console.log('command not recognized');
