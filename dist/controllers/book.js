"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const book_model_1 = __importDefault(require("../models/book_model"));
const gwtAllBooks = (req, res) => {
    res.send('get all books');
};
const AddNewBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.message);
    const word = req.body.message;
    const book = new book_model_1.default({
        title: req.body.message,
        author: word,
        publishing_year: 2023,
        Published_by: word,
        Summary: word,
        state_of_book: word
    });
    console.log(book);
    try {
        yield book.save();
        console.log("saved in DB");
        res.status(200).send(book);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ 'error': "failed" });
    }
});
module.exports = { gwtAllBooks, AddNewBook };
//# sourceMappingURL=book.js.map