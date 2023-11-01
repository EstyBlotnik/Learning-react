"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: 'imb' }));
app.use(body_parser_1.default.json());
//mongo DB
const mongoose_1 = __importDefault(require("mongoose"));
const dbURL = 'mongodb+srv://pm:1234567890@projectmanagement.srxmxoq.mongodb.net/project_management?retryWrites=true&w=majority';
mongoose_1.default.connect(dbURL) //,{useNewUrlParser: true, useUnifiedTopology: true,})
    .then((result) => console.log('conected mongoose'))
    .catch((error) => console.error(error));
// const db = mongoose.Connection
// db.on('error',error=>{console.error(error)})
// db.once('open',()=>{console.log('conect to mongo DB')})
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const postRouter_1 = __importDefault(require("./routs/postRouter"));
const bookRouter_1 = __importDefault(require("./routs/bookRouter"));
app.use('/post', postRouter_1.default);
app.use('/book', bookRouter_1.default);
app.use('/public', express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Hello!');
});
module.exports = app;
//# sourceMappingURL=server.js.map