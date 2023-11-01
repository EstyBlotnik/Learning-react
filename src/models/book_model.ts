import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishing_year:{
        type: Number,
        default: 2023,
    },
    Published_by: {
        type: String,
        required: true,
    },
    Summary: {
        type: String,
        required: true,
    },
    state_of_book: {
        type: String,
        required: true,
    }
})

export = mongoose.model('Book',bookSchema)