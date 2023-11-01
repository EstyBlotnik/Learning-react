"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const book_1 = __importDefault(require("../controllers/book"));
router.get('/', (req, res, next) => {
    book_1.default.gwtAllBooks(req, res, next);
});
router.post('/', book_1.default.AddNewBook);
module.exports = router;
//# sourceMappingURL=bookRouter.js.map