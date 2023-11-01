"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const post_1 = __importDefault(require("../controllers/post"));
router.get('/', (req, res, next) => {
    post_1.default.gwtAllPosts(req, res, next);
});
router.post('/', post_1.default.AddNewPost);
module.exports = router;
//# sourceMappingURL=postRouter.js.map