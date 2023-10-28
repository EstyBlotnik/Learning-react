const express = require('express');
const router = express.Router();
const post = require('../controllers/post.js')

router.get('/', (req, res,next) => {
    post.gwtAllPosts(req, res,next);
});

router.post('/', post.AddNewPost);

module.exports = router;