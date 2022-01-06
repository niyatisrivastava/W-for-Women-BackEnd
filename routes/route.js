import express, { Router } from 'express';
import { getAllPosts } from '../controller/post-controller.js';

import { createPost} from '../controller/post-controller.js';

const router = express.Router();


router.post('/create', createPost);
router.get('/posts', getAllPosts);



export default router;