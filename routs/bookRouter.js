const express = require('express');
const router = express.Router();
const book = require('../controllers/book.js')

router.get('/', (req, res,next) => {
    book.gwtAllBooks(req, res,next);
});

router.post('/', book.AddNewBook);

module.exports = router;