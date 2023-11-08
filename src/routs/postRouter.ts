import express from 'express';
const router = express.Router();
import post from '../controllers/post';
import auth from '../controllers/auth'

router.get('/', auth.authenticateMiddleware,post.gwtAllPosts);

router.post('/', auth.authenticateMiddleware,post.AddNewPost);

export = router;