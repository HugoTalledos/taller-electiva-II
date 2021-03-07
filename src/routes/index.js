const express = require('express');
const router = express.Router(); //Crear múltiples rutas y mantenerlas en archivos separados.

router.get('/', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal' });
});

router.get('/create', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal' });
});
router.get('/edit', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal' });
});
router.get('/delete', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal' });
});
router.get('/list', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal' });
});

module.exports = router;
