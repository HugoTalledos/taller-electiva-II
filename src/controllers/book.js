const library = require('../books.json');

const getBooks = async (req, res) => {
	const { book: books } = library;
	res.send({ status: 200, response: books });
};

const getBook = async (req, res) => {
	const { id } = req.params;
	const { book: books } = library;
	const resp = books.find(book => book.id === parseInt(id));
	res.send({ status: 200, response: resp });
};

const deleteBook = async (req, res) => {
	const { id } = req.params;
	const { book: books } = library;
	const resp = books.find(book => book.id === parseInt(id));
	const bookDeleted = { ...resp, status: true };
	const index = books.indexOf(resp);
	books.slice(index, 1);
	books.push(bookDeleted);
	res.send({ status: 200, response: 'Book deleted' });
};

const editBook = async (req, res) => {
	const { id, title, publicationYear, author, description } = req.body;
	const resp = books.find(book => book.id === parseInt(id));
	const index = books.indexOf(resp);
	books.slice(index, 1);
	books.push({ id, title, publicationYear, author, description });
	res.send({ status: 200, response: 'Book edited' });
};

const addBook = async (req, res) => {
	const { book: books } = library;
	let id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
		while ((utils.getBill(id, billsArray)).length > 0) {
			id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
		}
	books.push({ ...req.body, id: id });
	res.send({ status: 200, response: 'Book added' });
};

module.exports = {
	addBook,
	editBook,
	deleteBook,
	getBook,
	getBooks
};
