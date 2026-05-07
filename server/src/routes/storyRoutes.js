import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

import {
    scrapeStories,
    getStories,
    toggleBookmark,
    getBookmarks,
} from '../controllers/storyController.js';

const router = express.Router();

router.post('/scrape', scrapeStories);
router.get('/', getStories);
router.get('/bookmarks', protect, getBookmarks);
router.post('/:id/bookmark', protect, toggleBookmark);

export default router;