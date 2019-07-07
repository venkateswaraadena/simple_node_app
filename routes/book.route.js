const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/book.controller');

router.get('/test',book_controller.test);

router.post('/create', book_controller.book_create);

router.get('/getall',book_controller.book_alldetails);

router.get('/:id',book_controller.book_details);

router.put('/:id/update', book_controller.book_update);

router.delete('/:id/delete',book_controller.book_delete);

module.exports = router;