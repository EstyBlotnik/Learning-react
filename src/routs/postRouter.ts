import express from 'express';
const router = express.Router();
import post from '../controllers/post';

router.get('/', (req, res,next) => {
    post.gwtAllPosts(req, res,next);
});

router.post('/', post.AddNewPost);

export = router;