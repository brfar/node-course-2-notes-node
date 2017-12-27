const fs = require('fs');

/**
 * 'fetchNotes' verifica se 'notes-data.json' já existe ou não. Sem essa função, 
 * tudo dentro de 'notes-data.json' seria apagado toda vez que o app fosse executado. 
 * o try/catch existe pois 'notes-data.json' não existe quando o usuário roda o app
 * pela primeira vez; gera um erro, então o 'catch' é executado, criando um array vazio */
var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json'); // puxa todo o conteúdo de 'notes.data.json'
		return JSON.parse(notesString); // take the string and parse it into JSON
		// when the user call 'fetchNotes', it's the 'return' they're gonna get.
	} catch (e) {
		return [];
	}
};

/**
 * 'saveNotes' recebe um objeto.
 * 'fs.writeFileSync' pega esse objeto, trasnforma em um JSON string
 * e joga em 'notes-data.json'
 */
var saveNotes = notes => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNotes = (title, body) => {
	const notes = fetchNotes();
	const note = {
		title,
		body
	};

	// verifica se existe alguma note com o mesmo título
	const duplicateNotes = notes.filter(note => note.title === title);

	// se o length do array acima for 0, quer dizer que não há notes duplicados
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note; // retorna o note para quando a função for chamada
		/* a função só vai retornar caso NÃO haja notas duplicadas
		se houver, nada retorna e quando a função for chamada, vai dar 'undefined' */
	}
};

const getAll = () => fetchNotes();

const getNote = title => {
	const notes = fetchNotes();
	const filteredNotes = notes.filter(note => note.title === title);
	return filteredNotes[0];
};

const removeNote = title => {
	const notes = fetchNotes();
	/* 'filteredNotes' cria um array com todos os elementos de 'notes', EXCETO o que o usuário
	 passou como argumento (title) isso vai fazer com que essa note seja 'deletada' */
	const filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);
	
	return notes.length !== filteredNotes.length;
	/* se o tamanho de 'notes' for igual ao de 'filteredNotes', quer dizer que nada foi deletado */
};

const logNote = note => {
	console.log('------------');
	console.log(`title: ${note.title}`);
	console.log(`body: ${note.body}`);
};

/* exporting all the functions in this file.
* we could use 'addNotes: addNotes' but ES6 allows the syntax below! */
module.exports = {
	addNotes,
	getAll,
	getNote,
	removeNote,
	fetchNotes,
	logNote
};