const fs = require('fs');

const originalNote = {
	title: 'some title',
	body: 'some body',
};

// JSON.stringify takes an object and turns it into a JSON string!
const originalNoteString = JSON.stringify(originalNote);

// creates 'notes.json' and its content will be whatever is in 'originalNoteString'
fs.writeFileSync('notes.json', originalNoteString);

// joga em uma variável todo o conteúdo de notes.json
const noteString = fs.readFileSync('notes.json');

// JSON.parse takes an JSON string and parse it into its original form
const note = JSON.parse(noteString);
