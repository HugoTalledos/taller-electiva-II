const express = require('express');
const library = require('../books.json');
const router = express.Router(); //Crear múltiples rutas y mantenerlas en archivos separados.

router.get('/', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal', library, message: '', books: '' });
});

router.get('/create', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal', library, message: '', books: '' });
});
router.get('/edit', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal', library, message: '', books: '' });
});
router.get('/delete', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal', library, message: '', books: '' });
});
router.get('/list', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal', library, message: '', books: '' });
});

module.exports = router;
