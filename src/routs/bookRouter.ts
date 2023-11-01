import express from 'express';
const router = express.Router();
import book from '../controllers/book';

router.get('/', (req, res,next) => {
    book.gwtAllBooks(req, res);
});

router.post('/', book.AddNewBook);

export = router;