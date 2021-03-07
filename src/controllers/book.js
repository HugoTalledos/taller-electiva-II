const library = require('../books.json');
const fs = require('fs');
const path = require('path');
const rootDir = path.dirname(require.main.filename);

const getBook = async (req, res) => {
	const { id } = req.params;
	const resp = library.find(book => book.id === parseInt(id));
	res.render('index.html', { title: 'Taller Grupal', library, message: '', book: resp})
};

const deleteBook = async (req, res) => {
	const { idBook } = req.body;
	const resp = library.find(book => book.id === parseInt(idBook));
	const bookDeleted = { ...resp, status: 0 };
	const index = library.indexOf(resp);
	library.splice(index, 1);
	library.push(bookDeleted);
	const json_books = JSON.stringify(library);
	fs.writeFileSync('src/books.json', json_books, 'utf-8');
	res.render('index.html', { title: 'Taller Grupal', library, message: 'Book has been deleted!', book: '' })
};

const editBook = async (req, res) => {
	const { id, title, publicationYear, author, description } = req.body;
	const resp = library.find(book => book.id === parseInt(id));
	const index = library.indexOf(resp);
	library.slice(index, 1);
	library.push({ id, title, publicationYear, author, description });
	res.render('index.html', { title: 'Taller Grupal', library, message: 'Book has been edited!', book: '' })
};

const addBook = async (req, res) => {
	let id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
	library.push({ ...req.body, id: id, status: 1, loan: 0 });
	const json_books = JSON.stringify(library);
  fs.writeFileSync('src/books.json', json_books, 'utf-8');
  res.render('index.html', { title: 'Taller Grupal', library, message: 'Book has been created!', book: '' });
};

module.exports = {
	addBook,
	editBook,
	deleteBook,
	getBook
};


