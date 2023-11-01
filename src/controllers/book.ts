
import Book from '../models/book_model';
import { Request, Response } from 'express';
const gwtAllBooks = (req:Request , res:Response) => {
    res.send('get all books');
}

const AddNewBook = async (req:Request , res:Response) => {
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

export = {gwtAllBooks, AddNewBook};