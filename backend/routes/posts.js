import { Router } from 'express';
const router = Router();
import { single } from '../middlewares/uploadMiddleware.js';
import { getAllPosts, createPost, updatePost, deletePost } from '../controllers/postController.js';

router.get('/', getAllPosts);
router.post('/', single('image'), createPost);
router.put('/:id', single('image'), updatePost);
router.delete('/:id', deletePost);

export default router;
