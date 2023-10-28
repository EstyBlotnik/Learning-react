
const Book = require('../models/book_model.js')
const gwtAllBooks = (req, res,next) => {
    res.send('get all books');
}

const AddNewBook = async (req, res,next) => {
    console.log(req.body.message);
    const word = req.body.message;
    const book= new Book({
        title: req.body.message,
        author: word,
        publishing_year: 2023,
        Published_by: word,
        Summary: word,
        state_of_book: word
    })
    console.log(book);
    await book.save();
    
}

module.exports = {gwtAllBooks, AddNewBook};