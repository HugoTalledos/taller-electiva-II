const express = require('express');
const controller = require('../controllers/book');

const router = express.Router(); //Crear múltiples rutas y mantenerlas en archivos separados.

router.post('/book', controller.addBook);
router.put('/book', controller.editBook);
router.get('/deleteBook/:id', controller.deleteBook);
router.get('/book/:id', controller.getBook);
router.get('/book', controller.getBooks);

module.exports = router;