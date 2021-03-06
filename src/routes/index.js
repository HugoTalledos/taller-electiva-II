const express = require('express');
const router = express.Router(); //Crear múltiples rutas y mantenerlas en archivos separados.

router.get('/', (req, res) => {
	res.render('index.html', { title: 'Taller Grupal' });
});

// router.get('/contact', (req, res) => {
// 	res.render('contact.html', { title: 'Contact Page' });
// });

// router.post('/db-create', (req, res) => {
// 	dbconnection.create_Message;
// });
module.exports = router;
