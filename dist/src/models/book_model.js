"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishing_year: {
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
});
module.exports = mongoose_1.default.model('Book', bookSchema);
//# sourceMappingURL=book_model.js.map