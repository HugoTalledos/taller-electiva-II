const express = require('express');
const controller = require('../controllers/book');

const router = express.Router(); //Crear múltiples rutas y mantenerlas en archivos separados.

router.post('/book', controller.addBook);
router.post('/editBook', controller.editBook);
router.post('/deleteBook', controller.deleteBook);
router.get('/book/:id', controller.getBook);

module.exports = router;