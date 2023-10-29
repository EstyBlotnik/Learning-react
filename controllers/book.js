
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
    try{
        await book.save();
        console.log("saved in DB");
        res.status(200).send(book);
    }   
    catch(err){
        console.log(err);
        res.status(400).send({'error': "failed"});
    }
}

module.exports = {gwtAllBooks, AddNewBook};